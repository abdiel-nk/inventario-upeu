import { create } from "zustand";
import {
  BuscarMarca,
  EditarMarca,
  EliminarMarca,
  InsertarMarca,
  MostrarMarca,
} from "../index";
export const useMarcaStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datamarca: [],
  datamarcaBusqueda: [],
  marcaItemSelect: [],
  parametros: {},
  mostrarMarca: async (p) => {
    console.log("parametros enviados",p);
    const response = await MostrarMarca(p);
    console.log("respuesta api",response);

    set({ parametros: p });
    set({ datamarca: response });
    set({ marcaItemSelect: response[0] });
    return response;
  },
  selectMarca: (p) => {
    set({ marcaItemSelect: p });
  },
  insertarMarca: async (p) => {
    await InsertarMarca(p);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  eliminarMarca: async (p) => {
    await EliminarMarca(p);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  editarMarca: async (p) => {
    await EditarMarca(p);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  buscarMarca: async (p) => {
    console.log("buscando", p);
    const response = await BuscarMarca(p);
    console.log("resultado", response);
    set({ datamarcaBusqueda:response });
    return response;
  },
}));