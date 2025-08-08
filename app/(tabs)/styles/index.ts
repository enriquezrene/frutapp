import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    color: '#7BB86F',
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
    height: 140,
    backgroundColor: '#F1F8E9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cajaImage: {
    width: 120,
    height: 120,
  },
  cajaRating: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
    gap: 3,
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