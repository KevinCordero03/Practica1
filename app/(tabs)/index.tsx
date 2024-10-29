import React from 'react-native';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface RoomCardProps {
  title: string;
  price: string;
  description: string;
  image: any;
}
export default function HomeScreen() {
  const rooms = [
    {
      id: 1,
      image: require('../../assets/images/room-2.jpeg'),
      title: "Suite Deluxe",
      price: "$200/noche",
      description: "Amplia suite con vista al mar"
    },
    {
      id: 2,
      image: require('../../assets/images/room-1.jpeg'),
      title: "Habitación Premium",
      price: "$150/noche",
      description: "Confort y elegancia"
    },
    {
      id: 3,
      image: require('../../assets/images/room-3.jpeg'),
      title: "Suite Familiar",
      price: "$180/noche",
      description: "Perfecta para familias"
    }
  ];
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.hotelName}>Grand Hotel Paradise</Text>
        <Text style={styles.tagline}>Experiencia de lujo y confort</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Image
          source={require('../../assets/images/hotel-2.jpeg')}
          style={styles.heroImage}
          resizeMode='cover'
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroText}>Bienvenidos al paraíso</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.buttonText}>Reservar Ahora</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Nuestras Amenidades</Text>
        <View style={styles.featuresGrid}>
          <Feature icon="pool" title="Piscina" />
          <Feature icon="restaurant" title="Restaurante" />
          <Feature icon="spa" title="Spa" />
          <Feature icon="wifi" title="Wi-Fi" />
        </View>
      </View>

      {/* Rooms Section */}
      <View style={styles.roomsContainer}>
        <Text style={styles.sectionTitle}>Habitaciones</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              image={room.image}
              title={room.title}
              price={room.price}
              description={room.description}
            />
          ))}
        </ScrollView>
      </View>

      {/* About Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>Sobre Nosotros</Text>
        <Text style={styles.aboutText}>
          Ubicado en el corazón de la ciudad, Grand Hotel Paradise ofrece una experiencia 
          única combinando lujo, confort y servicio excepcional. Con más de 20 años de 
          experiencia, nos enorgullece brindar la mejor atención a nuestros huéspedes.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.contactContainer}>
        <Text style={styles.sectionTitle}>Contacto</Text>
        <View style={styles.contactInfo}>
          <ContactItem icon="location-on" text="Av. Principal 123, Ciudad" />
          <ContactItem icon="phone" text="+1 234 567 890" />
          <ContactItem icon="email" text="info@grandhotelparadise.com" />
        </View>
      </View>
    </ScrollView>
  );
}

// Componente Feature
const Feature = ({ icon, title }:any) => (
  <View style={styles.featureItem}>
    <Icon name={icon} size={30} color="#666" />
    <Text style={styles.featureText}>{title}</Text>
  </View>
);

// Componente RoomCard
const RoomCard = ({ title, price, description, image }:any) => (
  <View style={styles.roomCard}>
    <Image
      source={image}
      style={styles.roomImage}
      resizeMode='cover'
    />
    <View style={styles.roomInfo}>
      <Text style={styles.roomTitle}>{title}</Text>
      <Text style={styles.roomPrice}>{price}</Text>
      <Text style={styles.roomDescription}>{description}</Text>
    </View>
  </View>
);

// Componente ContactItem
const ContactItem = ({ icon, text }:any) => (
  <View style={styles.contactItem}>
    <Icon name={icon} size={24} color="#666" />
    <Text style={styles.contactText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#1a237e',
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  heroContainer: {
    height: 300,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  bookNowButton: {
    backgroundColor: '#f50057',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '48%',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  featureText: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
  },
  roomsContainer: {
    padding: 20,
  },
  roomCard: {
    width: 280,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  roomImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  roomInfo: {
    padding: 15,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  roomPrice: {
    fontSize: 16,
    color: '#f50057',
    marginVertical: 5,
  },
  roomDescription: {
    fontSize: 14,
    color: '#666',
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  contactContainer: {
    padding: 20,
  },
  contactInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
});