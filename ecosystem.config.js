module.exports = {
  apps : [
      {
          name   : "server",
          cwd : "./server",
          script: "npm",
          args: "start",
          env:{
              NODE_ENV: "production"
          }
      },
      {
          name : "client",
          cwd: "./client",
          script: "npm",
          args: "start",
          env: {
              NODE_ENV: "production"
          }
      }
  ],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
