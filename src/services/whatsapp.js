import formatPrice from '../utils/formatPrice'

const WHATSAPP_NUMBER = '5493435330189'

function getGeneralWhatsAppUrl(
  message = 'Hola, quiero hacer una consulta a sobre Candler.',
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function buildCartMessage(cartItems) {
  const productLines = cartItems.map(
    ({ product, quantity }) => {
      const subtotal = product.price * quantity

      return `- ${quantity} x ${product.name}: ${formatPrice(subtotal)}`
    },
  )

  const total = cartItems.reduce(
    (currentTotal, { product, quantity }) =>
      currentTotal + product.price * quantity,
    0,
  )

  return [
    'Hola, quiero realizar un pedido en Candler.',
    '',
    'Productos:',
    ...productLines,
    '',
    `Total estimado: ${formatPrice(total)}`,
    '',
    'Forma de pago: (efectivo o transferencia)',
    'Retiro o envio dentro de Paraná: (nombre de quien retira o direccion en la que quiere recibir el envio)',
  ].join('\n')
}

function getCartWhatsAppUrl(cartItems) {
  const message = buildCartMessage(cartItems)

  return getGeneralWhatsAppUrl(message)
}

export { getCartWhatsAppUrl, getGeneralWhatsAppUrl }


