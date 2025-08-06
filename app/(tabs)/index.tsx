import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OFERTAS = [
  {
    id: '1',
    nombre: 'Tomate Cherry',
    precio: 0.9,
    precioAntes: 1.0,
    imagen: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
  },
  {
    id: '2',
    nombre: 'Aguacate',
    precio: 1.5,
    precioAntes: 2.0,
    imagen: 'https://cdn-icons-png.flaticon.com/512/415/415734.png',
  },
  {
    id: '3',
    nombre: 'Mango',
    precio: 1.7,
    precioAntes: 2.10,
    imagen: 'https://cdn-icons-png.flaticon.com/512/415/415732.png',
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{
        paddingBottom: 50 + insets.bottom,
        paddingTop: insets.top,
      }}
    >
      <SafeAreaView style={styles.container}>
        {/* Header Superior */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Frut</Text>
            <Text style={styles.logoTextBold}>App</Text>
            <MaterialCommunityIcons name="leaf" size={24} color="#7BB86F" style={{ marginLeft: 2 }} />
          </View>
          <View style={styles.searchBar}>
            <MaterialIcons name="search" size={22} color="#388E3C" style={{ marginLeft: 8 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="¿Qué fruta necesitas hoy?"
              placeholderTextColor="#388E3C"
            />
          </View>
        </View>

        {/* Banner Promocional */}
        <View style={styles.banner}>
          <MaterialIcons name="local-shipping" size={22} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.bannerText}>¡Envíos gratis a partir de $5!</Text>
        </View>

        {/* Acceso rápido a categorías */}
        <View style={styles.categoriasContainer}>
          <TouchableOpacity style={[styles.categoriaBtn, { backgroundColor: '#FFE5E5' }]}>
            <FontAwesome5 name="apple-alt" size={28} color="#E53935" />
            <Text style={[styles.categoriaText, { color: '#E53935' }]}>Frutas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoriaBtn, { backgroundColor: '#E5F7E0' }]}>
            <Image
              source={require('../../assets/images/categorias/broccoli.png')}
              style={{ width: 28, height: 28 }}
              resizeMode="contain"
            />
            <Text style={[styles.categoriaText, { color: '#43A047' }]}>Verduras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoriaBtn, { backgroundColor: '#F7EFE5' }]}>
            <Image
              source={require('../../assets/images/categorias/almond.png')}
              style={{ width: 28, height: 28 }}
              resizeMode="contain"
            />
            <Text style={[styles.categoriaText, { color: '#A67C52' }]}>Frutos Secos</Text>
          </TouchableOpacity>
        </View>

        {/* Botón Dominante */}
        <TouchableOpacity style={styles.orderButton} activeOpacity={0.85}>
          <MaterialIcons name="shopping-cart" size={32} color="#fff" style={{ marginRight: 10 }} />
          <Text style={styles.orderButtonText}>Pedido Rápido</Text>
        </TouchableOpacity>

        {/* Ofertas del Día */}
        <View style={styles.ofertasContainer}>
          <Text style={styles.ofertasTitle}>Ofertas del Día</Text>
          <FlatList
            data={OFERTAS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingRight: 32 }} // <-- Espacio al final
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.card,
                  index === 0 && { marginLeft: 8 }, // Espacio al inicio
                ]}
              >
                <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                <Text style={styles.cardName}>{item.nombre}</Text>
                <Text style={styles.cardPrice}>
                  ${item.precio.toFixed(2)}
                  <Text style={styles.cardPriceAntes}>
                    / {item.precioAntes && <Text style={styles.cardPriceOld}>${item.precioAntes.toFixed(2)}</Text>}
                  </Text>
                </Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Añadir</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        {/* Recomendaciones Saludables */}
        <View style={styles.recomendacionesContainer}>
          <Text style={styles.recomendacionesTitle}>Recomendaciones Saludables</Text>
          <View style={styles.recomendacionesRow}>
            <TouchableOpacity style={styles.recomendacionCard} activeOpacity={0.85}>
              <MaterialCommunityIcons name="food-variant" size={32} color="#388E3C" />
              <Text style={styles.recomendacionCardTitle}>Desayunos Saludables</Text>
              <Text style={styles.recomendacionCardText}>
                Ideas de desayunos ligeros y nutritivos para empezar el día.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recomendacionCard} activeOpacity={0.85}>
              <FontAwesome5 name="carrot" size={32} color="#7BB86F" />
              <Text style={styles.recomendacionCardTitle}>Snacks de Frutas y Verduras</Text>
              <Text style={styles.recomendacionCardText}>
                Opciones de snacks bajos en calorías y llenos de sabor.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#F7FAF5',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  logoText: {
    fontSize: 28,
    color: '#234F1E', // Verde oscuro moderno
    fontWeight: '600',
    marginLeft: 6,
    letterSpacing: 1,
  },
  logoTextBold: {
    fontSize: 28,
    color: '#234F1E',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#388E3C', // Verde oscuro moderno
    paddingVertical: 6,
    marginBottom: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#234F1E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'transparent',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Verde intenso y moderno
    borderRadius: 14,
    marginHorizontal: 24,
    marginBottom: 14,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignSelf: 'center',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  categoriasContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8, // Menor separación entre categorías
    marginBottom: 18,
  },
  categoriaBtn: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10, // Menor padding vertical
    paddingHorizontal: 12, // Menor padding horizontal
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2, // Menor margen lateral
    width: 90, // Fijo para que quepan 3 en pantalla
    shadowColor: '#7BB86F',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  categoriaText: {
    marginTop: 6,
    color: '#7BB86F',
    fontWeight: 'bold',
    fontSize: 15,
  },
  orderButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#234F1E', // Verde oscuro
    borderRadius: 40,
    paddingVertical: 28,
    paddingHorizontal: 48,
    marginVertical: 18,
    elevation: 6,
    shadowColor: '#234F1E',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  ofertasContainer: {
    marginTop: 10,
    paddingLeft: 24,
  },
  ofertasTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234F1E',
    marginBottom: 10,
  },
  card: {
    width: 130, // antes 150
    backgroundColor: '#fff',
    borderRadius: 18,
    marginRight: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#7BB86F',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 30,
    backgroundColor: '#F7FAF5',
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#234F1E',
    marginBottom: 2,
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: 15,
    color: '#7BB86F',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardPriceAntes: {
    fontSize: 13,
    color: '#B6D7A8',
    fontWeight: 'normal',
    marginLeft: 4,
  },
  cardPriceOld: {
    textDecorationLine: 'line-through',
    color: '#B0B0B0',
    fontSize: 13,
    marginLeft: 2,
  },
  addButton: {
    marginTop: 6,
    backgroundColor: '#234F1E',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  recomendacionesContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  recomendacionesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#234F1E',
    marginBottom: 16,
  },
  recomendacionesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recomendacionCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#7BB86F',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  recomendacionCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#234F1E',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  recomendacionCardText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});