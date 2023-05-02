// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PROTOCOL: 'http' | 'https' = 'http';

const HOST: string = 'localhost';
const PORT: string = ':3000';

export const environment = {
  production: false,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
