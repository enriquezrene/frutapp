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
    const response = await fetch('http://localhost:3001/api/cajas');
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching cajas:', error);
    return [];
  }
};