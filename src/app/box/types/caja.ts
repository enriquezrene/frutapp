import { MaterialCommunityIcons } from "@expo/vector-icons";

export type Producto = {
  id?: number;
  nombre: string;
  cantidad: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
};

export type Caja = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  productos: Producto[];
  rating: number;
  pesoTotal?: string;
  categoria?: "frutas" | "verduras" | "mixto";
};
