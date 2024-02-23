module.exports = {
  apps: [
    {
      name: 'your-app-name',
      script: '/home/ec2-user/.nvm/versions/node/v18.12.1/bin/npm',
      args: 'run dev',
      interpreter: '/bin/bash',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
