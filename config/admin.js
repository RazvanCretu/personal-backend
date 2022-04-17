module.exports = ({ env }) => ({
  apiToken: {
    salt: env("API_TOKEN_SALT", "g8348hu9bgweb0gj0234jg0fjwr0jbg0sdhr08y08s4h"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "61488f555844398cda95a87395cb5bb9"),
  },
});
