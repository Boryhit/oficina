import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../db/user.schema.js";
import { env } from "../config/env.config.js";

const app = express();
app.use(express.json());

const sign = (u) =>
  jwt.sign({ sub: u._id, email: u.email, role: u.role }, env.jwt_secret, {
    expiresIn: env.jwt_expires,
  });

app.post("/auth/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "name, email e password são obrigatórios" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "E-mail já cadastrado" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, role: role || "user" });
    const token = sign(user);
    return res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Credenciais inválidas" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Credenciais inválidas" });
    const token = sign(user);
    return res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

app.post("/auth/refresh", async (req, res) => {
  // versão simplificada — reemite se o token ainda for válido
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : req.body.refreshToken;
    if (!token) return res.status(401).json({ message: "Sem token" });
    const payload = jwt.verify(token, env.jwt_secret, { ignoreExpiration: true });
    const newToken = jwt.sign(
      { sub: payload.sub, email: payload.email, role: payload.role },
      env.jwt_secret,
      { expiresIn: env.jwt_expires }
    );
    return res.json({ token: newToken });
  } catch (e) {
    return res.status(401).json({ message: "Refresh inválido" });
  }
});

app.get("/auth/me", async (req, res) => {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
    if (!token) return res.status(401).json({ message: "Sem token" });
    const payload = jwt.verify(token, env.jwt_secret);
    const user = await User.findById(payload.sub).select("-password");
    return res.json(user);
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
});

export default app;
