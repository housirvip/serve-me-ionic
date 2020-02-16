// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // apiUrl: 'http://localhost:8000/'
    // apiUrl: 'http://192.168.1.139:8000/'
    apiUrl: 'https://serve-me-java.herokuapp.com/',

    firebaseConfig: {
    apiKey: 'AIzaSyBDAY6j-CsEbns_tUZR1K6yneHLBVeeInE',
    authDomain: 'loginwithfirebase-4b092.firebaseapp.com',
    databaseURL: 'https://loginwithfirebase-4b092.firebaseio.com',
    projectId: 'loginwithfirebase-4b092',
    storageBucket: 'loginwithfirebase-4b092.appspot.com',
    messagingSenderId: '68444833382',
    appId: '1:68444833382:web:09d5b782b72d4b08ba4fa7',
    measurementId: 'G-7X2DC59Q93'
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
