import { MaterialCommunityIcons } from "@expo/vector-icons";

export type Product = {
  id: string;
  nombre: string;
  cantidad: string;
  reemplazable: boolean;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap; // Para íconos
};

export type Box = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  productos: Product[];
  rating: number;
  pesoTotal?: string;
  categoria?: 'frutas' | 'verduras' | 'mixto';
};