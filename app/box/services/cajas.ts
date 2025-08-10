//const API_URL = 'http://localhost:3000/api';
const API_URL = 'https://frut-api.netlify.app/api';
export interface ProductoEnCaja {
  id: number;
  cantidad: string;
  unidad: string;
  producto: {
    nombre: string;
    precio: string;
  };
  reemplazable?: boolean; // Lo añadiremos en la transformación
}

export interface Caja {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  precio: string;
  emoji: string;
  cajaProductos: ProductoEnCaja[];
}

export const fetchCajas = async (): Promise<Caja[]> => {
  try {
    const response = await fetch(`${API_URL}/cajas`);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching cajas:', error);
    return [];
  }
};