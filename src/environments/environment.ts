// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  origin: 'https://web.vinhcara.com',
  wcEndpoint: '/wp-json/wc/v2',
  woocommerce: {
    consumer_key: 'ck_b6d9d29b65dd970ffb9a85b59910d1e60e1e4be7',
    consumer_secret: 'cs_7bab593713fdb1db492fd533c04526092102c9f5',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
