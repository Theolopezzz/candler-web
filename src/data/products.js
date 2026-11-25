const products = [
  {
    id: 1,
    slug: 'sweet-vanilla',
    name: 'Sweet Vanilla',
    shortDescription:
      'No básico, clásico. Fragancia gourmand, con chaucha de vainilla y notas de golosinas.',
    description:
      'No básico, clásico. Fragancia gourmand, con chaucha de vainilla y notas de golosinas.',
    olfactoryFamily: 'Ámbar',
    notes: ['Vainilla', 'Golosinas'],
    image: '/images/products/sweet-vanilla.jpg',
    color: 'pink',
    featured: true,
    price: 20000,
    originalPrice: null,
    stock: 0
  },
  {
    id: 2,
    slug: 'morning-brew',
    name: 'Morning Brew',
    shortDescription:
      'Capuccino italiano hecho vela: notas de café tostado, cacao, azúcar y espuma de leche.',
    description:
      'Capuccino italiano hecho vela: notas de café tostado, cacao, azúcar y espuma de leche.',
    olfactoryFamily: 'Ámbar',
    notes: ['Café tostado', 'Cacao', 'Azúcar', 'Espuma de leche'],
    image: '/images/products/morning-brew.jpg',
    color: 'blue',
    featured: true,
    price: 20000,
    originalPrice: null,
    stock: 1,
  },
  {
    id: 3,
    slug: 'hazelnut',
    name: 'Hazelnut',
    shortDescription:
      'Crema de avellanas y caramelo, o sea, ¿Nut3ll4?',
    description:
      'Crema de avellanas y caramelo, o sea, ¿Nut3ll4?',
    olfactoryFamily: 'Ámbar',
    notes: ['Avellanas', 'Caramelo', 'Cacao'],
    image: '/images/products/hazelnut.jpg',
    color: 'yellow',
    featured: false,
    price: 20000,
    originalPrice: null,
    stock: 2,
  },
  {
    id: 4,
    slug: 'lemon-glaze',
    name: 'Lemon Glaze',
    shortDescription:
      'Limón dulce, notas de golosina, almizclado. Básicamente un lemon pie.',
    description:
      'Limón dulce, notas de golosina, almizclado. Básicamente un lemon pie.',
    olfactoryFamily: 'Cítrica',
    notes: ['Limón dulce', 'Golosina', 'Almizcle'],
    image: '/images/products/lemon-glaze.jpg',
    color: 'yellow',
    featured: true,
    price: 20000,
    originalPrice: null,
    stock: 2,
  },
  {
    id: 5,
    slug: 'roseberry',
    name: 'Roseberry',
    shortDescription:
      'Frutos rojos, rosa búlgara, pimienta rosa y caramelo: casi un afrodisíaco.',
    description:
      'Frutos rojos, rosa búlgara, pimienta rosa y caramelo: casi un afrodisíaco.',
    olfactoryFamily: 'Frutal',
    notes: ['Frutos rojos', 'Rosa búlgara', 'Pimienta rosa', 'Caramelo'],
    image: '/images/products/roseberry.jpg',
    color: 'burgundy',
    featured: true,
    price: 20000,
    originalPrice: null,
    stock: 2,
  },
  {
    id: 6,
    slug: 'wild-pitanga',
    name: 'Wild Pitanga',
    shortDescription:
      'La primavera en un frasco: mix de cítricos, berganota, notas frutales y florales de pitanga.',
    description:
      'La primavera en un frasco: mix de cítricos, berganota, notas frutales y florales de pitanga.',
    olfactoryFamily: 'Cítrica',
    notes: ['Pitanga', 'Bergamota', 'Cítricos', 'Flores'],
    image: '/images/products/wild-pitanga.jpg',
    color: 'blue',
    featured: false,
    price: 20000,
    originalPrice: null,
    stock: 2,
  },
  {
    id: 7,
    slug: 'coconut-caramel',
    name: 'Coconut Caramel',
    shortDescription:
      'Smells like summer: notas de coco, vainilla y caramelo.',
    description:
      'Smells like summer: notas de coco, vainilla y caramelo.',
    olfactoryFamily: 'Ámbar',
    notes: ['Coco', 'Vainilla', 'Caramelo'],
    image: '/images/products/coconut-caramel.jpg',
    color: 'pink',
    featured: false,
    price: 20000,
    originalPrice: null,
    stock: 2,
  },
]

export default products