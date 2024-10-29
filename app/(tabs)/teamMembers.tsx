import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function TeamScreen() {
  const executiveTeam = [
    {
      id: '1',
      name: 'Carlos Rodríguez',
      position: 'Director General',
      image: require('../../assets/images/director.png'),
      description: 'Con más de 20 años de experiencia en la industria hotelera de lujo, Carlos ha liderado la transformación de Hotel Majestic en un referente de la hospitalidad.',
      achievements: ['Premio al Mejor Director Hotelero 2023', 'Miembro del Consejo de Turismo'],
      education: 'MBA en Administración Hotelera - Cornell University'
    },
    {
      id: '2',
      name: 'María Sánchez',
      position: 'Directora de Operaciones',
      image: require('../../assets/images/operaciones.jpg'),
      description: 'María supervisa todas las operaciones diarias del hotel, asegurando que cada detalle cumpla con nuestros estándares de excelencia.',
      achievements: ['Certificación en Gestión Hotelera de Lujo', 'Ex Gerente del Ritz Madrid'],
      education: 'Máster en Gestión Hotelera Internacional - Les Roches'
    },
    {
      id: '3',
      name: 'Chef Antonio Martín',
      position: 'Director de Gastronomía',
      image: require('../../assets/images/chef.jpeg'),
      description: 'Con 2 estrellas Michelin, el Chef Antonio lidera nuestras experiencias culinarias, fusionando tradición e innovación.',
      achievements: ['2 Estrellas Michelin', 'Premio al Mejor Chef del Año 2024'],
      education: 'Formación Culinaria - Le Cordon Bleu París'
    }
  ];

  const departmentHeads = [
    {
      id: '4',
      name: 'Laura González',
      position: 'Directora de Spa & Bienestar',
      image: require('../../assets/images/spa.jpg')
    },
    {
      id: '5',
      name: 'Miguel Torres',
      position: 'Director de Eventos',
      image: require('../../assets/images/eventos.jpg')
    },
    {
      id: '6',
      name: 'Ana Ramírez',
      position: 'Directora de Servicio al Cliente',
      image: require('../../assets/images/servicio.jpg')
    },
    {
      id: '7',
      name: 'Pedro Núñez',
      position: 'Director de Mantenimiento',
      image: require('../../assets/images/mantenimiento.jpg')
    }
  ];

  const ExecutiveCard = ({ member }:any) => (
    <View style={styles.executiveCard}>
      <Image source={member.image} style={styles.executiveImage} />
      <View style={styles.executiveInfo}>
        <Text style={styles.executiveName}>{member.name}</Text>
        <Text style={styles.executivePosition}>{member.position}</Text>
        <Text style={styles.executiveDescription}>{member.description}</Text>
        
        <Text style={styles.achievementsTitle}>Logros Destacados:</Text>
        {member.achievements.map((achievement:any, index:any) => (
          <View key={index} style={styles.achievementItem}>
            <View style={styles.achievementDot} />
            <Text style={styles.achievementText}>{achievement}</Text>
          </View>
        ))}
        
        <Text style={styles.educationTitle}>Formación:</Text>
        <Text style={styles.educationText}>{member.education}</Text>
      </View>
    </View>
  );

  const DepartmentHead = ({ member }:any) => (
    <TouchableOpacity style={styles.departmentCard}>
      <Image source={member.image} style={styles.departmentImage} />
      <View style={styles.departmentInfo}>
        <Text style={styles.departmentName}>{member.name}</Text>
        <Text style={styles.departmentPosition}>{member.position}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nuestro Equipo</Text>
        <Text style={styles.headerSubtitle}>
          Profesionales dedicados a crear experiencias extraordinarias
        </Text>
      </View>

      {/* Team Introduction */}
      <View style={styles.introSection}>
        <Text style={styles.introText}>
          Nuestro equipo está formado por profesionales apasionados y altamente cualificados, 
          comprometidos con brindar el más alto nivel de servicio y hospitalidad. 
          Cada miembro aporta su experiencia única para crear experiencias memorables para 
          nuestros huéspedes.
        </Text>
      </View>

      {/* Executive Team Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Equipo Directivo</Text>
        {executiveTeam.map(member => (
          <ExecutiveCard key={member.id} member={member} />
        ))}
      </View>

      {/* Department Heads Section */}
      <View style={[styles.section, styles.departmentSection]}>
        <Text style={styles.sectionTitle}>Jefes de Departamento</Text>
        <View style={styles.departmentGrid}>
          {departmentHeads.map(member => (
            <DepartmentHead key={member.id} member={member} />
          ))}
        </View>
      </View>

      {/* Values Section */}
      <View style={styles.valuesSection}>
        <Text style={styles.valuesTitle}>Nuestros Valores de Equipo</Text>
        <View style={styles.valuesGrid}>
          {[
            { value: 'Excelencia', description: 'Búsqueda constante de la perfección en cada detalle' },
            { value: 'Pasión', description: 'Amor por la hospitalidad y el servicio' },
            { value: 'Innovación', description: 'Mejora continua de nuestros servicios' },
            { value: 'Trabajo en Equipo', description: 'Colaboración para lograr resultados extraordinarios' }
          ].map((item, index) => (
            <View key={index} style={styles.valueCard}>
              <Text style={styles.valueTitle}>{item.value}</Text>
              <Text style={styles.valueDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Join Us CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Únete a Nuestro Equipo</Text>
        <Text style={styles.ctaText}>
          Estamos siempre en busca de talentos excepcionales que compartan nuestra 
          pasión por la hospitalidad de lujo.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Ver Oportunidades</Text>
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
  header: {
    backgroundColor: '#1a237e',
    padding: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
  introSection: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
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
  executiveCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  executiveImage: {
    width: '100%',
    height: 300,
  },
  executiveInfo: {
    padding: 20,
  },
  executiveName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  executivePosition: {
    fontSize: 16,
    color: '#f50057',
    marginBottom: 15,
  },
  executiveDescription: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  achievementsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  achievementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f50057',
    marginRight: 10,
  },
  achievementText: {
    fontSize: 14,
    color: '#666',
  },
  educationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 5,
  },
  educationText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  departmentSection: {
    backgroundColor: '#f5f5f5',
  },
  departmentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  departmentCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  departmentImage: {
    width: '100%',
    height: 150,
  },
  departmentInfo: {
    padding: 12,
  },
  departmentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  departmentPosition: {
    fontSize: 14,
    color: '#666',
  },
  valuesSection: {
    padding: 20,
    backgroundColor: '#1a237e',
  },
  valuesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  ctaSection: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  ctaText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
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