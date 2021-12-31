module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_S3_HOST],
    loader: 'imgix',
    path: process.env.NEXT_PUBLIC_S3_HOST,
  },
}
