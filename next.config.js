module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/info',
        destination: '/info/rankings',
        permanent: true,
      },
    ]
  },
}
