module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61488f555844398cda95a87395cb5bb9'),
  },
});
