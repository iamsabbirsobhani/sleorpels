module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: 'A8HkFggRljH0hPVlhZDEPA==',
  },
  transfer: {
    token: {
      salt: 'A8HkFggRljH0hPVlhZDEPA=='
    }
  }
});
