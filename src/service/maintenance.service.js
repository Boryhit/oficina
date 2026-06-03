import { createMaintenance } from "../repository/write/maintenance.repository.write.js";
import { getAllMaintenances, getMaintenanceById } from "../repository/read/maintenance.repository.read.js";
import { updateMaintenance } from "../repository/update/maintenance.repository.update.js";
import { deleteMaintenance } from "../repository/delete/maintenance.repository.delete.js";

export async function createMaintenanceService(maintenance) {
    try {
        if (!maintenance.workshop || !maintenance.vehicle || !maintenance.services || !maintenance.date || !maintenance.totalcost) {
            throw new Error("Dados Inválidos!");
        }
        const newMaintenance = await createMaintenance(maintenance);
        return newMaintenance;
    } catch (error) {
        console.error("Erro ao criar manutenção", error);
        throw error;
    }
}

export async function getAllMaintenancesService() {
    try {
        const maintenances = await getAllMaintenances();
        return maintenances;
    } catch (error) {
        console.error("Erro ao buscar manutenções", error);
        throw error;
    }
}

export async function getMaintenanceByIdService(id) {
    try {
        const maintenance = await getMaintenanceById(id);
        return maintenance;
    } catch (error) {
        console.error("Erro ao buscar manutenção", error);
        throw error;
    }
}

export async function getMaintenanceByWorkshopService(workshopId) {
    try {
        const workshops = await getMaintenanceByWorkshop(workshopId);
        return workshops;
    } catch (error) {
        console.error("Erro ao buscar manutenções por oficina", error);
        throw error;
    }
}

export async function getMaintenanceByVehicleService(maintenanceId) {
    try {
        const maintenance = await getMaintenanceByVehicle(maintenanceId);
        return maintenance;
    } catch (error) {
        console.error("Erro ao buscar manutenções por veículo", error);
        throw error;
    }
}

export async function updateMaintenanceService(id, maintenance) {
    try {
        if (!maintenance.workshop || !maintenance.vehicle || !maintenance.services || !maintenance.date || !maintenance.totalcost) {
            throw new Error("Dados Inválidos!");
        }
        const updatedMaintenance = await updateMaintenance(id, maintenance.workshop, maintenance.vehicle, maintenance.services, maintenance.date, maintenance.totalcost);
        return updatedMaintenance;
    } catch (error) {
        console.error("Erro ao atualizar manutenção", error);
        throw error;
    }
}

export async function deleteMaintenanceService(id) {
    try {
        const deletedMaintenance = await deleteMaintenance(id);
        return deletedMaintenance;
    } catch (error) {
        console.error("Erro ao excluir manutenção", error);
        throw error;
    }
}