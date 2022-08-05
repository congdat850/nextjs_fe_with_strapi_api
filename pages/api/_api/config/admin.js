module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dec9a9bf970f60a11b1400d67c573ac0'),
  },
});
