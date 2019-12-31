module.exports = {
  apps: [
    {
      name: "serve react",
      script: "./serve.js",
      watch: true,
      env: {
        PORT: 5000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 80,
        NODE_ENV: "production"
      }
    }
  ]
};
