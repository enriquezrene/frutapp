import { Caja } from "../types/caja";

const API_URL = "http://localhost:3000/api";
//const API_URL = "https://frut-api.netlify.app/api";

export const fetchCajas = async (): Promise<Caja[]> => {
  try {
    const response = await fetch(`${API_URL}/cajas`);
    const data = await response.json();
    const formattedCajas = data.items.map((item: any) => {
      return mapAsCaja(item);
    });
    return formattedCajas;
  } catch (error) {
    console.error("Error fetching cajas:", error);
    return [];
  }
};

export const fetchCaja = async (id: number): Promise<Caja> => {
  try {
    const response = await fetch(`${API_URL}/cajas?id=${id}`);
    const data = await response.json();
    return mapAsCaja(data);
  } catch (error) {
    console.error("Error fetching caja:", error);
    throw new Error("Error al cargar la caja");
  }
};

const mapAsCaja = (data: any): Caja => {
  return {
    id: data.id,
    nombre: data.nombre,
    descripcion: data.descripcion,
    precio: parseFloat(data.precio),
    imagen: data.imagenUrl,
    productos: data.cajaProductos.map((producto: any) => ({
      nombre: producto.producto.nombre,
      cantidad: `${producto.cantidad} ${producto.unidad}`,
    })),
    rating: data.rating,
  };
}