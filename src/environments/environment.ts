// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  //URL del dominio asociado a la aplicación, para comprobar si está o no suspendido

  domainUrl: 'https://development.xerintel.net/',

  //URL del endpoint de la api de pruebas
  apiUrl: 'https://lav8.xerintel.net/devxerintel/api/auth/',

  stripePublishableKey: 'pk_test_51KyZ1OAcr41a1NJzp6OCyIMMAKAlTd3Z8uBVA127yqHoPIbdysIdRVJInpkUCsgqBQXbWWsQwStjelozXAbEv0bc00JEy5JxVR',

  weather_api: 'cb0416a18bee40bdbfa190412240904',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
