import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function AboutUsScreen() {
  const hotelFeatures = [
    {
      id: '1',
      title: 'Habitaciones de Lujo',
      description: 'Más de 200 habitaciones y suites diseñadas para brindar el máximo confort',
      icon: require('../../assets/images/room-icon.png')
    },
    {
      id: '2',
      title: 'Gastronomía Excepcional',
      description: '3 restaurantes de clase mundial con chefs galardonados',
      icon: require('../../assets/images/restaurant-icon.png')
    },
    {
      id: '3',
      title: 'Spa & Bienestar',
      description: 'Centro de spa completo con tratamientos exclusivos',
      icon: require('../../assets/images/spa-icon.jpg')
    }
  ];

  const stats = [
    { number: '25+', label: 'Años de Experiencia' },
    { number: '200+', label: 'Habitaciones' },
    { number: '50k+', label: 'Huéspedes Satisfechos' },
    { number: '4.8', label: 'Calificación Promedio' }
  ];

  const FeatureCard = ({ feature }:any) => (
    <View style={styles.featureCard}>
      <Image source={feature.icon} style={styles.featureIcon} />
      <Text style={styles.featureTitle}>{feature.title}</Text>
      <Text style={styles.featureDescription}>{feature.description}</Text>
    </View>
  );

  const StatBox = ({ stat }:any) => (
    <View style={styles.statBox}>
      <Text style={styles.statNumber}>{stat.number}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Image
          source={require('../../assets/images/facade-hotel.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.hotelName}>Grand Hotel Paradise</Text>
          <Text style={styles.tagline}>Tradición de Excelencia desde 1998</Text>
        </View>
      </View>

      {/* Our Story Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nuestra Historia</Text>
        <Text style={styles.storyText}>
          Fundado en 1998, Grand Hotel Paradise se ha convertido en un ícono de la hospitalidad de lujo. 
          Ubicado en el corazón de la ciudad, nuestro hotel combina la elegancia clásica con comodidades modernas 
          para crear experiencias inolvidables para nuestros huéspedes.
        </Text>
        <Text style={styles.storyText}>
          Nos enorgullece mantener los más altos estándares de servicio y calidad, 
          respaldados por nuestro dedicado equipo de profesionales que trabajan incansablemente 
          para superar las expectativas de nuestros huéspedes.
        </Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <StatBox key={index} stat={stat} />
        ))}
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nuestras Instalaciones</Text>
        <View style={styles.featuresGrid}>
          {hotelFeatures.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </View>
      </View>

      {/* Values Section */}
      <View style={[styles.section, styles.valuesSection]}>
        <Text style={styles.sectionTitle}>Nuestros Valores</Text>
        <View style={styles.valuesList}>
          {[
            'Excelencia en el Servicio',
            'Atención al Detalle',
            'Innovación Constante',
            'Sostenibilidad',
            'Hospitalidad Genuina'
          ].map((value, index) => (
            <View key={index} style={styles.valueItem}>
              <View style={styles.valueDot} />
              <Text style={styles.valueText}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Contact CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>¿Listo para vivir la experiencia?</Text>
        <Text style={styles.ctaSubtitle}>Permítanos hacer de su estancia algo extraordinario</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Reservar Ahora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroContainer: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(26, 35, 126, 0.7)',
    padding: 20,
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  storyText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#1a237e',
  },
  statBox: {
    width: '50%',
    padding: 15,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  valuesSection: {
    backgroundColor: '#f5f5f5',
  },
  valuesList: {
    paddingHorizontal: 20,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  valueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f50057',
    marginRight: 10,
  },
  valueText: {
    fontSize: 16,
    color: '#333',
  },
  ctaSection: {
    padding: 30,
    backgroundColor: '#1a237e',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 20,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#f50057',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});