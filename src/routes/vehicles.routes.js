import express from 'express';
import { getAllVehiclesService, getVehicleByIdService, createVehicleService, updateVehicleService, deleteVehicleService } from '../service/vehicle.service.js';

const app = express();
app.use(express.json());

app.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await getAllVehiclesService();
    return res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.get("/vehicles/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const vehicle = await getVehicleByIdService(id);
    return res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.post("/vehicles", async (req, res) => {
  try {
    const newVehicle = await createVehicleService(req.body);
    return res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

app.put("/vehicles/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedVehicle = await updateVehicleService(id, req.body);
    return res.status(200).json(updatedVehicle);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.delete("/vehicles/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedVehicle = await deleteVehicleService(id );
    return res.status(200).json(deletedVehicle);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

export default app;
