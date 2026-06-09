import { createVehicle } from "../repository/write/vehicle.repository.write.js";
import { getAllVehicles, getVehicleById, getMaintenanceByVehicle, getVehicleByPlate } from "../repository/read/vehicle.repository.read.js";
import { updateVehicle } from "../repository/update/vehicle.repository.update.js";
import { deleteVehicle } from "../repository/delete/vehicle.repository.delete.js";

export async function createVehicleService(vehicle) {
    try {
        if (!vehicle.plate || !vehicle.model || !vehicle.year || !vehicle.owner || !vehicle.maintenances) {
            throw new Error("Dados Inválidos!");
        }
        const newVehicle = await createVehicle(vehicle);
        return newVehicle;
    } catch (error) {
        console.error("Erro ao criar veículo", error);
        throw error;
    }
}

export async function getAllVehiclesService() {
    try {
        const vehicles = await getAllVehicles();
        return vehicles;
    } catch (error) {
        console.error("Erro ao buscar veículos", error);
        throw error;
    }
}

export async function getVehicleByIdService(id) {
    try {
        const vehicle = await getVehicleById(id);
        return vehicle;
    } catch (error) {
        console.error("Erro ao buscar veículo", error);
        throw error;
    }
}

export async function getMaintenanceByVehicleService(maintenancesId) {
    try {
        const maintenanceId = await getMaintenanceByVehicle(maintenancesId);
        return maintenanceId;
    } catch (error) {
        console.error("Erro ao buscar manutenções por veículo", error);
        throw error;
    }
}

export async function getVehicleByPlateService(plate) {
    try {
        const vehicle = await getVehicleByPlate(plate);
        return vehicle;
    } catch (error) {
        console.error("Erro ao buscar veículo por placa", error);
        throw error;
    }
}

export async function updateVehicleService(id, vehicle) {
    try {
        if (!vehicle.plate || !vehicle.model || !vehicle.year || !vehicle.owner || !vehicle.maintenancesId) {
            throw new Error("Dados Inválidos!");
        }
        const updatedVehicle = await updateVehicle(id, vehicle.plate, vehicle.model, vehicle.year, vehicle.owner, vehicle.maintenancesId);
        return updatedVehicle;
    } catch (error) {
        console.error("Erro ao atualizar veículo", error);
        throw error;
    }
}

export async function deleteVehicleService(id) {
    try {
        const deletedVehicle = await deleteVehicle(id);
        return deletedVehicle;
    } catch (error) {
        console.error("Erro ao excluir veículo", error);
        throw error;
    }
}
