import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function BlogScreen() {
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Experiencias Gastronómicas en Nuestro Hotel',
      date: '28 Oct 2024',
      category: 'Gastronomía',
      image: require('../../assets/images/food-blog.jpeg'),
      preview: 'Descubre los sabores únicos que ofrecemos en nuestro restaurante gourmet...',
      readTime: '5 min lectura'
    },
    {
      id: '2',
      title: 'Guía Completa de Nuestras Instalaciones de Spa',
      date: '25 Oct 2024',
      category: 'Bienestar',
      image: require('../../assets/images/spa-blog.jpg'),
      preview: 'Relájate y rejuvenece en nuestro spa de clase mundial...',
      readTime: '4 min lectura'
    },
    {
      id: '3',
      title: 'Eventos Corporativos: Espacios que Inspiran',
      date: '20 Oct 2024',
      category: 'Negocios',
      image: require('../../assets/images/business-blog.jpg'),
      preview: 'Conoce nuestras instalaciones para eventos empresariales...',
      readTime: '6 min lectura'
    }
  ];

  const BlogCard = ({ post }:any) => (
    <TouchableOpacity style={styles.blogCard}>
      <Image
        source={post.image}
        style={styles.blogImage}
        resizeMode="cover"
      />
      <View style={styles.blogInfo}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{post.category}</Text>
          <Text style={styles.readTime}>{post.readTime}</Text>
        </View>
        <Text style={styles.blogTitle}>{post.title}</Text>
        <Text style={styles.blogPreview}>{post.preview}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{post.date}</Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Leer más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hotelName}>Blog del Hotel</Text>
        <Text style={styles.tagline}>Historias y Experiencias Únicas</Text>
      </View>

      <View style={styles.featuredPostContainer}>
        <Image
          source={require('../../assets/images/featured-blog.jpg')}
          style={styles.featuredImage}
          resizeMode="cover"
        />
        <View style={styles.featuredOverlay}>
          <Text style={styles.featuredTag}>DESTACADO</Text>
          <Text style={styles.featuredTitle}>
            Descubre la Nueva Temporada de Eventos en Nuestro Hotel
          </Text>
          <Text style={styles.featuredPreview}>
            Una mirada exclusiva a los próximos eventos y experiencias...
          </Text>
        </View>
      </View>

      <View style={styles.blogContainer}>
        <Text style={styles.sectionTitle}>Últimas Publicaciones</Text>
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categorías</Text>
        <View style={styles.categoriesGrid}>
          {['Gastronomía', 'Bienestar', 'Eventos', 'Viajes', 'Experiencias', 'Negocios'].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  featuredPostContainer: {
    height: 400,
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  featuredTag: {
    color: '#f50057',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  featuredPreview: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  blogContainer: {
    padding: 20,
  },
  blogCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  blogImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  blogInfo: {
    padding: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  category: {
    color: '#f50057',
    fontWeight: 'bold',
  },
  readTime: {
    color: '#666',
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  blogPreview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  date: {
    color: '#666',
  },
  readMoreButton: {
    backgroundColor: '#1a237e',
    padding: 8,
    borderRadius: 5,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  categoryButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
