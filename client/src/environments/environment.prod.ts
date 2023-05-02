const PROTOCOL: 'http' | 'https' = 'http';

const HOST = '31.42.189.116';
const PORT = ':3000';

export const environment = {
  production: true,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,
};
