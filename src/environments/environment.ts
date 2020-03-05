// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    // apiUrl: 'http://192.168.1.139:8000/',
    apiUrl: 'https://serve-me-java.herokuapp.com/',
    // apiUrl: 'http://localhost:8000/',
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDCYS2n_rzJkPL3zN8pKhnYEuC7Kk8Yvbg',
        authDomain: 'serve-me-ionic.firebaseapp.com',
        databaseURL: 'https://serve-me-ionic.firebaseio.com',
        projectId: 'serve-me-ionic',
        storageBucket: 'serve-me-ionic.appspot.com',
        messagingSenderId: '1098703889152',
        appId: '1:1098703889152:web:83cc7082968fa3884e49e5',
        measurementId: 'G-WS3KHFY9PN'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
