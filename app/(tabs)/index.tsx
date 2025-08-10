import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCajas } from '../box/hooks/use-cajas';
import { styles } from './styles';



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
                      {item.productos.map((prod: { nombre: string, cantidad: number} , idx: number) => (
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

