app.controller('CategoryController', ['$scope', '$state', 'API_ENDPOINT', '$http', '$location', function ($scope, $state, API_ENDPOINT, $http, $location) {

    // $http.get(API_ENDPOINT.url + 'services/').then(function(response) {
    //     $scope.categories = response.data;
    // });

    // $http.get(API_ENDPOINT.api_url + API_ENDPOINT.merchant_id +'/categories' +'?' + API_ENDPOINT.access_token + API_ENDPOINT.auth_token).then(function(response) {
    //     $scope.categories = response.data;
    // });


    // $scope.categories = {
    //     "elements": [
    //         {
    //             "id": "KTAFAM73EHP94",
    //             "name": "Drinks",
    //             "sortOrder": 16
    //         },
    //         {
    //             "id": "KXHN2WF65XEA8",
    //             "name": "Banquet Hall",
    //             "sortOrder": 15
    //         },
    //         {
    //             "id": "0PV2WX3D4QGCG",
    //             "name": "Forkable",
    //             "sortOrder": 14
    //         },
    //         {
    //             "id": "GFM6954613XZ0",
    //             "name": "AAHOA Event",
    //             "sortOrder": 11
    //         },
    //         {
    //             "id": "XGVY8EJ3KJWDA",
    //             "name": "Kid's Menu",
    //             "sortOrder": 10
    //         },
    //         {
    //             "id": "TA2QB6QYTYRXP",
    //             "name": "Deserts",
    //             "sortOrder": 9
    //         },
    //         {
    //             "id": "7TJ7QKAY4A81P",
    //             "name": "Naan & Roti",
    //             "sortOrder": 8
    //         },
    //         {
    //             "id": "H47VQ94PQ9ADM",
    //             "name": "Biryani & Rice",
    //             "sortOrder": 7
    //         },
    //         {
    //             "id": "P8X2A0HA40SZ4",
    //             "name": "Curries & More - Non Veg",
    //             "sortOrder": 6
    //         },
    //         {
    //             "id": "TCVD8FHKSMKPJ",
    //             "name": "Non - Veg Appetizers",
    //             "sortOrder": 5
    //         },
    //         {
    //             "id": "KBWHSAY5N1AWW",
    //             "name": "Curries & More - Vegetarian",
    //             "sortOrder": 4
    //         },
    //         {
    //             "id": "AZWJ1PB1PXKNT",
    //             "name": "Veg Appetizers",
    //             "sortOrder": 3
    //         },
    //         {
    //             "id": "HD0SJ4VXXFEBW",
    //             "name": "Salads",
    //             "sortOrder": 2
    //         },
    //         {
    //             "id": "9HH9QQQY0VWPR",
    //             "name": "Soups",
    //             "sortOrder": 1
    //         },
    //         {
    //             "id": "N8X3KNH4WWPP0",
    //             "name": "Alcohol",
    //             "sortOrder": 0
    //         },
    //         {
    //             "id": "Q60DBGQ1PV98C",
    //             "name": "Lunch Menu",
    //             "sortOrder": 0
    //         },
    //         {
    //             "id": "M3W9CQP2KCBXG",
    //             "name": "Events"
    //         }
    //     ],
    //     "href": "http://api.clover.com/v3/merchants/03ZTNPJW6K942/categories?limit=100"
    // }

    $scope.categories = JSON.parse(localStorage.getItem("menu_catg"))

    $scope.gotoitems = function(id){
        $state.go('categoryitems',{id:id})
    }

}])