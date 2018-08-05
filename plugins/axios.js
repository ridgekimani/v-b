export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.common['Tipe-Id'] = process.env.secretKey
    config.headers.common['Authorization'] = process.env.apiKey
  })
}
