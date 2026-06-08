import { createWorkshop } from "../repository/write/workshop.repository.write.js";
import { getAllWorkshops, getWorkshopById } from "../repository/read/workshop.repository.read.js";
import { updateWorkshop } from "../repository/update/workshop.repository.update.js";
import { deleteWorkshop } from "../repository/delete/workshop.repository.delete.js";

export async function createWorkshopService(workshop) {
    try {
        if (!workshop.name || !workshop.address || !workshop.specialities) {
            throw new Error("Dados Inválidos!");
        }
        if (workshop.specialities.length === 0) {
            throw new Error("Especialidade é obrigatória!");
        }
        if (workshop.vehicles.length === 0) {
            throw new Error("Veículo é obrigatório!");
        }
        const newWorkshop = await createWorkshop(workshop);
        return newWorkshop;
    } catch (error) {
        console.error("Erro ao criar oficina", error);
        throw error;
    }
}

export async function getAllWorkshopsService() {
    try {
        const workshops = await getAllWorkshops();
        return workshops;
    } catch (error) {
        console.error("Erro ao buscar oficinas", error);
        throw error;
    }
}

export async function getWorkshopByIdService(id) {
    try {
        const workshop = await getWorkshopById(id);
        return workshop;
    } catch (error) {
        console.error("Erro ao buscar oficina", error);
        throw error;
    }
}

export async function getVehicleByWorkshopService(vehicleId) {
    try {
        const workshops = await getVehicleByWorkshop(vehicleId);
        return workshops;
    } catch (error) {
        console.error("Erro ao buscar oficinas por veículo", error);
        throw error;
    }
}

export async function updateWorkshopService(id, workshop) {
    try {
        if (!workshop.name || !workshop.address || !workshop.specialities || !workshop.vehicles) {
            throw new Error("Dados Inválidos!");
        }
        if (workshop.specialities.length === 0) {
            throw new Error("Especialidade é obrigatória!");
        }
        if (workshop.vehicles.length === 0) {
            throw new Error("Veículo é obrigatório!");
        }
        const updatedWorkshop = await updateWorkshop(id, workshop.name, workshop.address, workshop.specialities, workshop.vehicles);
        return updatedWorkshop;
    } catch (error) {
        console.error("Erro ao atualizar oficina", error);
        throw error;
    }
}

export async function deleteWorkshopService(id) {
    try {
        const deletedWorkshop = await deleteWorkshop(id);
        return deletedWorkshop;
    } catch (error) {
        console.error("Erro ao excluir oficina", error);
        throw error;
    }
}
