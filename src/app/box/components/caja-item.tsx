import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Caja } from "../types/caja";

interface CajaItemProps {
  caja: Caja;
}

export const CajaItem: React.FC<CajaItemProps> = ({ caja: box }) => {
  return (
    <Link href={`/box-details/${box.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: box.imagen }} style={styles.image} />
          <View style={styles.rating}>
            <MaterialIcons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{box.rating}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{box.nombre}</Text>
          <Text style={styles.description}>{box.descripcion}</Text>

          <View style={styles.products}>
            {box.productos.map((prod, idx) => (
              <Text key={idx} style={styles.product}>
                • {prod.nombre}{" "}
                <Text style={styles.quantity}>({prod.cantidad})</Text>
              </Text>
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={styles.price}>${box.precio.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#7BB86F",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    width: "100%", // Ocupa todo el ancho disponible
    height: 160, // Altura fija para mantener relación rectangular
    position: "relative", // Necesario para posicionamiento absoluto del hijo
    overflow: "hidden", // Para que nada se salga del contenedor
    backgroundColor: "#F1F8E9",
  },
  image: {
    width: "100%", // Ocupa todo el ancho del contenedor
    height: "100%", // Ocupa toda la altura del contenedor
    resizeMode: "cover",
  },
  rating: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: "600",
    fontSize: 12,
    color: "#234F1E",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#234F1E",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  products: {
    marginVertical: 8,
  },
  product: {
    fontSize: 14,
    color: "#234F1E",
    marginBottom: 4,
  },
  quantity: {
    fontSize: 13,
    color: "#7BB86F",
  },
  moreItems: {
    fontSize: 12,
    color: "#7BB86F",
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#234F1E",
  },
  customizeButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  customizeText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 4,
  },
});