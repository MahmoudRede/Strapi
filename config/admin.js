module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9fd0c7e31e7c248ff0aab9577d2290b6'),
  },
});
