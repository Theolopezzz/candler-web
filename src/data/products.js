const products = [
  {
    id: 1,
    slug: 'sweet-vanilla',
    name: 'Sweet Vanilla',
    shortDescription:
      'No básico, clásico. Fragancia gourmand con chaucha de vainilla y notas de golosinas.',
    description:
      'Una fragancia dulce y envolvente protagonizada por la chaucha de vainilla y acompañada por notas de golosinas.',
    olfactoryFamily: 'Ámbar',
    notes: ['Vainilla', 'Golosinas'],
    image: '/images/products/sweet-vanilla.jpg',
    color: 'pink',
    featured: true,
    price: 20000,
    originalPrice: null,
    stock: 1,
  },
  {
    id: 2,
    slug: 'morning-brew',
    name: 'Morning Brew',
    shortDescription:
      'Cappuccino italiano hecho vela, con café tostado, cacao, azúcar y espuma de leche.',
    description:
      'Una combinación gourmand inspirada en un cappuccino italiano, con notas de café tostado, cacao, azúcar y espuma de leche.',
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
      'Crema de avellanas y caramelo. Sí, un poco como esa crema que estás pensando.',
    description:
      'Un aroma cálido y cremoso que combina avellanas, caramelo y notas suaves de cacao.',
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
      'Limón dulce, notas de golosina y un fondo almizclado. Básicamente, un lemon pie.',
    description:
      'Una fragancia cítrica y dulce que combina limón, notas de golosina y un fondo suavemente almizclado.',
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
      'Frutos rojos, rosa búlgara, pimienta rosa y caramelo. Casi un afrodisíaco.',
    description:
      'Una mezcla frutal y floral con frutos rojos, rosa búlgara, pimienta rosa y un fondo de caramelo.',
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
      'La primavera en un frasco: cítricos, bergamota y notas frutales y florales de pitanga.',
    description:
      'Una fragancia luminosa que combina cítricos, bergamota y notas frutales y florales de pitanga.',
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
      'Una combinación cálida y tropical con notas de coco, vainilla y caramelo.',
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