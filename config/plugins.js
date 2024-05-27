module.exports = ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    },
  },
  'media-prefix': {
    enabled: true,
  },
  // ...
});
