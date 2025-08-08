import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#7BB86F',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    height: 160,
    backgroundColor: '#F1F8E9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  rating: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 12,
    color: '#234F1E',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#234F1E',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  products: {
    marginVertical: 8,
  },
  product: {
    fontSize: 14,
    color: '#234F1E',
    marginBottom: 4,
  },
  quantity: {
    fontSize: 13,
    color: '#7BB86F',
  },
  moreItems: {
    fontSize: 12,
    color: '#7BB86F',
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: '#234F1E',
  },
  customizeButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  customizeText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 4,
  },
});

// Estilos dinámicos (si los necesitas)
export const dynamicStyles = {
  productImage: (size: number) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
  }),
};