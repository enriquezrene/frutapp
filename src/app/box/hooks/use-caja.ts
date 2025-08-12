import { useEffect, useState } from "react";
import { fetchCaja } from "../services/cajas-api";
import { Caja } from "../types/caja";

export const useCaja = (id: number) => {
  const [idCaja] = useState<number>(id);
  const [caja, setCaja] = useState<Caja>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCajas = async () => {
      try {
        const caja = await fetchCaja(idCaja);
        if (!caja) {
          setError("Caja no encontrada");
          setLoading(false);
          return;
        }
        setCaja(caja);
      } catch (err) {
        setError("Error al cargar caja");
        console.error("Error al cargar caja", err);
      } finally {
        setLoading(false);
      }
    };

    loadCajas();
  }, [idCaja]);

  return { caja, loading, error };
};
