import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCajas } from '@/src/app/box/hooks/use-cajas';
import { Producto } from '@/src/app/box/types/caja';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { cajas, loading, error } = useCajas();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: insets.bottom + 30 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="sprout" size={28} color="#4CAF50" />
            <View>
              <Text style={styles.logoText}>FreshBox</Text>
              <Text style={styles.sloganText}>Frescura garantizada</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cartIcon}>
            <MaterialIcons name="shopping-cart" size={24} color="#234F1E" />
          </TouchableOpacity>
        </View>

        <View style={styles.qualityBanner}>
          <View style={styles.qualityBadge}>
            <MaterialIcons name="verified" size={18} color="#FFF" />
            <Text style={styles.qualityBadgeText}>Premium</Text>
          </View>
          <Text style={styles.qualityText}>Solo productos en su punto perfecto</Text>
          <MaterialCommunityIcons name="seed" size={20} color="#FFF" />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cajas listas para disfrutar</Text>
          <Text style={styles.sectionSubtitle}>Personaliza los productos o crea tu combinación perfecta desde cero</Text>

          <FlatList
            data={cajas} 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cajasList}
            renderItem={({ item }) => {
              console.log('Caja item:', item.imagen);
              return <Link href={{
                pathname: "/box-details",
                params: {
                  box: JSON.stringify(item)
                }
              }} asChild>
                <TouchableOpacity style={styles.cajaCard}>
                  {/* Imagen y rating */}
                  <View style={styles.cajaImageContainer}>
                    <Image source={{ uri: 'https://enriquezrene.github.io/frut-api/images/cajas/energia-matutina.jpg' }} style={styles.cajaImage} />
                    <View style={styles.cajaRating}>
                      <MaterialIcons name="star" size={14} color="#FFD700" />
                      <Text style={styles.cajaRatingText}>{item.rating}</Text>
                    </View>
                  </View>

                  {/* Contenedor de información */}
                  <View style={styles.cajaInfo}>
                    <Text style={styles.cajaName}>{item.nombre}</Text>
                    <Text style={styles.cajaDesc}>{item.descripcion}</Text>

                    {/* Lista de productos compacta */}
                    <View style={styles.productList}>
                      {item.productos.map((prod: Producto, idx: number) => (
                        <Text key={idx} style={styles.productItem}>
                          • {prod.nombre} <Text style={styles.productQuantity}>({prod.cantidad})</Text>
                        </Text>
                      ))}
                    </View>

                    {/* Precio y botones */}
                    <Text style={styles.cajaPrice}>${item.precio.toFixed(2)}</Text>
                    <View style={styles.buttonGroup}>
                      <TouchableOpacity style={[styles.actionButton, styles.personalizeButton]}>
                        <MaterialIcons name="edit" size={14} color="#234F1E" />
                        <Text style={styles.personalizeButtonText}> Personalizar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.actionButton, styles.addButton]}>
                        <Text style={styles.addButtonText}>Pedir</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Link>
            }
          }
          />

          <TouchableOpacity
            style={styles.customBoxCard}
            onPress={() => navigation.navigate('ConstructorCajas')}
          >
            <View style={styles.customBoxContent}>
              <MaterialCommunityIcons
                name="plus-circle"
                size={32}
                color="#4CAF50"
                style={styles.customBoxIcon}
              />
              <View>
                <Text style={styles.customBoxTitle}>Crear mi caja personalizada</Text>
                <Text style={styles.customBoxSubtitle}>Elige cada fruta y verdura a tu gusto</Text>
              </View>
            </View>
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color="#234F1E"
            />
          </TouchableOpacity>
        </View>

        {/* --- Sección de garantía de calidad --- */}
        <View style={styles.benefitsContainer}>
          <Text style={styles.sectionTitle}>Nuestro Compromiso</Text>

          <View style={styles.benefitItem}>
            <MaterialCommunityIcons name="check-circle" size={22} color="#4CAF50" />
            <View style={styles.benefitTextContainer}>
              <Text style={styles.benefitTitle}>Frescura Certificada</Text>
              <Text style={styles.benefitDesc}>Recogido máximo 24h antes de tu entrega</Text>
            </View>
          </View>

          <View style={styles.benefitItem}>
            <MaterialCommunityIcons name="truck-delivery" size={22} color="#4CAF50" />
            <View style={styles.benefitTextContainer}>
              <Text style={styles.benefitTitle}>Entrega en 24h</Text>
              <Text style={styles.benefitDesc}>Envíos refrigerados para mantener la calidad</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#F9FFF7',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#234F1E',
  },
  sloganText: {
    fontSize: 12,
    color: '#7BB86F',
    fontWeight: '600',
  },
  qualityBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
  },
  qualityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#234F1E',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    gap: 5,
  },
  qualityBadgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  qualityText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  sectionContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#234F1E',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 15,
  },
  cajasList: {
    paddingRight: 20,
  },
  cajaCard: {
    width: 280,
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#7BB86F',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  cajaImageContainer: {
    width: '100%',          // Ocupa todo el ancho disponible
    height: 160,            // Altura fija para mantener relación rectangular
    position: 'relative',   // Necesario para posicionamiento absoluto del hijo
    overflow: 'hidden',     // Para que nada se salga del contenedor
    backgroundColor: '#F1F8E9', // Color de fondo por si la imagen no carga
  },
  cajaImage: {
    width: '100%',         // Ocupa todo el ancho del contenedor
    height: '100%',        // Ocupa toda la altura del contenedor
    resizeMode: 'cover',   // Cubre el espacio manteniendo proporciones
  },
  cajaRating: {
    position: 'absolute',  // Posicionamiento absoluto respecto al contenedor padre
    top: 10,               // 10px desde el borde superior
    right: 10,             // 10px desde el borde derecho
    flexDirection: 'row',  // Icono y texto en fila
    alignItems: 'center',  // Centrado vertical
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo blanco semitransparente
    borderRadius: 12,      // Bordes redondeados
    paddingVertical: 3,    // Espaciado vertical
    paddingHorizontal: 8,  // Espaciado horizontal
    gap: 3,                // Espacio entre icono y texto
  },
  cajaRatingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#234F1E',
  },
  cajaInfo: {
    padding: 15,
  },
  cajaName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#234F1E',
    marginBottom: 5,
  },
  cajaDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 12,
    lineHeight: 18,
  },
  cajaProducts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 15,
  },
  productPill: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  productPillText: {
    fontSize: 12,
    color: '#388E3C',
    fontWeight: '500',
  },
  benefitsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
  },
  benefitTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  benefitTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#234F1E',
    marginBottom: 3,
  },
  benefitDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },

  pesoText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
    marginTop: 8,
    fontStyle: 'italic',
  },
  productList: {
    marginVertical: 8,
    minHeight: 60
  },
  productItem: {
    fontSize: 13,
    color: '#234F1E',
    lineHeight: 18,
  },
  productTextContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 13,
    color: '#234F1E',
  },
  productQuantity: {
    fontSize: 12,
    color: '#666',
  },

  cajaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  personalizeButtonText: {
    textAlign: 'center',
    color: '#234F1E',
    fontWeight: '600',
    fontSize: 14,
  },

  addButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  moreItems: {
    fontSize: 12,
    color: '#7BB86F',
    fontStyle: 'italic',
    marginTop: 4,
  },
  cajaPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#234F1E',
    textAlign: 'right',
    marginTop: 8,
    marginBottom: 5, // Reducido
  },
  pesoTotal: {
    fontSize: 12,
    color: '#7BB86F',
    textAlign: 'right',
    marginBottom: 12,
  },
  buttonGroup: {
    gap: 8,
    marginTop: 0, // Eliminado margen superior
  },
  actionButton: {
    flex: 1, // Ocupa espacio equitativo
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  personalizeButton: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    flex: 1.2, // El botón principal ocupa más espacio
  },
  customBoxCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#7BB86F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  customBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  customBoxIcon: {
    marginRight: 15,
  },
  customBoxTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#234F1E',
    marginBottom: 3,
  },
  customBoxSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  cartIcon: {
    position: 'relative',
  },
});