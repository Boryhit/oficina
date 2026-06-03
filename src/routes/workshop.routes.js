import express from 'express';
import { getAllWorkshopsService } from '../service/workshop.service.js';

const app = express();
app.use(express.json());

app.get("/workshops", async (req, res) => {
  try {
    const workshops = await getAllWorkshopsService();
    return res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.get("/workshops/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const workshop = await getWorkshopByIdService(id);
    return res.status(200).json(workshop);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.post("/workshops", async (req, res) => {
  try {
    const newWorkshop = await createWorkshopService(req.body);
    return res.status(201).json(newWorkshop);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

app.put("/workshops/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedWorkshop = await updateWorkshopService(id, req.body);
    return res.status(200).json(updatedWorkshop);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.delete("/workshops/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedWorkshop = await deleteWorkshopService(id );
    return res.status(200).json(deletedWorkshop );
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

export default app;
