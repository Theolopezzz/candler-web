import supabase from './supabase'

async function saveCustomerContact({
  email,
  acceptsMarketing,
}) {
  const normalizedEmail = email.trim().toLowerCase()

  const { error } = await supabase
    .from('customer_contacts')
    .insert({
      email: normalizedEmail,
      accepts_marketing: acceptsMarketing,
      source: 'checkout',
      updated_at: new Date().toISOString(),
    })

  if (error && error.code !== '23505') {
    throw error
  }
}

export { saveCustomerContact }