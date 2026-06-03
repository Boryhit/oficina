import express from 'express';
import { getAllMaintenancesService, getMaintenanceByIdService, createMaintenanceService, updateMaintenanceService, deleteMaintenanceService } from '../service/maintenance.service.js';

const app = express();
app.use(express.json());

app.get("/maintenances", async (req, res) => {
  try {
    const maintenances = await getAllMaintenancesService();
    return res.status(200).json(maintenances);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.get("/maintenances/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const maintenance = await getMaintenanceByIdService(id);
    return res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.post("/maintenances", async (req, res) => {
  try {
    const newMaintenance = await createMaintenanceService(req.body);
    return res.status(201).json(newMaintenance);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

app.put("/maintenances/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMaintenance = await updateMaintenanceService(id, req.body);
    return res.status(200).json(updatedMaintenance);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.delete("/maintenances/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMaintenance = await deleteMaintenanceService(id );
    return res.status(200).json(deletedMaintenance );
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

export default app;
