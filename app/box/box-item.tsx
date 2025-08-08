import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Box } from './types/box';
import { styles } from './styles/box-item-styles'; 


interface BoxItemProps {
  box: Box;
  showDetails?: boolean;
  onPress?: () => void;
}

export const BoxItem = ({ box, showDetails = false, onPress }: BoxItemProps) => {
  const { nombre, imagen, precio, rating, productos, descripcion } = box;

  return (
    <Link 
      href={{
        pathname: "/box-details",
        params: { box: JSON.stringify(box) }
      }} 
      asChild
    >
      <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
      >
        {/* Imagen y rating */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imagen }} style={styles.image} />
          <View style={styles.rating}>
            <MaterialIcons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        {/* Contenido */}
        <View style={styles.content}>
          <Text style={styles.title}>{nombre}</Text>
          {showDetails && (
            <Text style={styles.description}>{descripcion}</Text>
          )}

          {/* Lista de productos (mostrar solo 2 si no es detalle) */}
          <View style={styles.products}>
            {productos.slice(0, showDetails ? productos.length : 2).map((prod, idx) => (
              <Text key={idx} style={styles.product}>
                • {prod.nombre} <Text style={styles.quantity}>({prod.cantidad})</Text>
              </Text>
            ))}
            {!showDetails && productos.length > 2 && (
              <Text style={styles.moreItems}>+ {productos.length - 2} más...</Text>
            )}
          </View>

          {/* Precio y botones */}
          <View style={styles.footer}>
            <Text style={styles.price}>${precio.toFixed(2)}</Text>
            {showDetails && (
              <TouchableOpacity style={styles.customizeButton}>
                <MaterialCommunityIcons name="pencil" size={16} color="#FFF" />
                <Text style={styles.customizeText}> Personalizar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
