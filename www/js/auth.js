// app.factory('AuthInterceptor', function ($q, $location,$window,API_ENDPOINT) {

//     var interceptorFactory = {};

//     interceptorFactory.request = function (config) {
//         var token = API_ENDPOINT.auth_token;
//         if (token) {
//             config.headers['Authorization'] = 'Bearer ' + token;
//             $window.localStorage.setItem('token', token);
//         }
//         return config;
//         console.log(config);
//     };

//     interceptorFactory.responseError = function (response) {

//         if (response.status == 403) {
//             $location.path('/playlists');
//         }
//         return $q.reject(response);

//     }

//     return interceptorFactory;

// })