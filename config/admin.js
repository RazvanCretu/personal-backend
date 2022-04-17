module.exports = ({ env }) => ({
  apiToken: { salt: env("API_TOKEN_SALT") },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "61488f555844398cda95a87395cb5bb9"),
  },
});
