module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06afff21eb4766dc0a59461bc3b67a93'),
  },
});
