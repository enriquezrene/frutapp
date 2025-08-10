import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/box-item-styles';

interface BoxItemProps {
  box: {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    productos: {
      nombre: string;
      cantidad: string;
      reemplazable: boolean;
    }[];
    rating: number;
  };
}

export const BoxItem: React.FC<BoxItemProps> = ({ box }) => {
  return (
    <Link href={{
      pathname: "/box-details",
      params: { box: JSON.stringify(box) }
    }} asChild>
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
                • {prod.nombre} <Text style={styles.quantity}>({prod.cantidad})</Text>
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