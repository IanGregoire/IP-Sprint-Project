const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'IanG',
        mongodb_password: 'security',
        mongodb_clustername: 'ProjectLearning',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'IanG',
      mongodb_password: 'security',
      mongodb_clustername: 'ProjectLearning',
      mongodb_database: 'my-site',
    },
  };
};