import { useEffect, useState } from "react";
import { fetchCajas } from "../services/cajas-api";
import { Caja } from "../types/caja";

export const useCajas = () => {
  const [cajas, setCajas] = useState<Caja[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCajas = async () => {
      try {
        const cajas = await fetchCajas();
        setCajas(cajas);
      } catch (err) {
        setError("Error al cargar las cajas");
        console.error("Error al cargar las cajas", err);
      } finally {
        setLoading(false);
      }
    };

    loadCajas();
  }, []);

  return { cajas, loading, error };
};
