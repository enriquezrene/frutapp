import { useEffect, useState } from 'react';
import { fetchCajas } from '../services/cajas';

export const useCajas = () => {
  const [cajas, setCajas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCajas = async () => {
      try {
        const data = await fetchCajas();
        const formattedCajas = data.map((caja: any) => {
          return {
            id: caja.id,
            nombre: caja.nombre,
            descripcion: caja.descripcion,
            precio: parseFloat(caja.precio),
            imagen: caja.imagenUrl,
            productos: caja.cajaProductos.map((producto: any) => ({
              nombre: producto.producto.nombre,
              cantidad: `${producto.cantidad} ${producto.unidad}`,
              reemplazable: true
            })),
            rating: 4.5,
          }
        });
        setCajas(formattedCajas);
      } catch (err) {
        setError('Error al cargar las cajas');
        console.error('Error al cargar las cajas', err);
      } finally {
        setLoading(false);
      }
    };

    loadCajas();
  }, []);

  return { cajas, loading, error };
};