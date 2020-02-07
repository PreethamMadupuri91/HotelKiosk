app.controller('ItemController', ['$scope', '$state', 'API_ENDPOINT', '$http','$stateParams','$window', function ($scope, $state,  API_ENDPOINT, $http ,$stateParams, $window) {

    $scope.categoryid = $stateParams.id;
    $scope.menu =[];

    // $http.get(API_ENDPOINT.api_url + API_ENDPOINT.merchant_id +'/categories/' + $scope.categoryid +'/items' +'?' + API_ENDPOINT.access_token + API_ENDPOINT.auth_token).then(function(response) {
    //     $scope.items = response.data;
    // });

    $scope.menu_items = JSON.parse($window.localStorage.getItem("menu_items"));

    _.each($scope.menu_items,function(item){
        if ($scope.categoryid == item.catg_id){
            $scope.menu.push(item);
        }
    })
    console.log($scope.menu)
    $scope.items = $scope.menu.slice();

// $scope.items ={
//     "elements": [
//         {
//             "id": "HTS9MH2QPV290",
//             "hidden": false,
//             "name": "Soda",
//             "alternateName": "",
//             "code": "",
//             "sku": "",
//             "price": 200,
//             "priceType": "FIXED",
//             "defaultTaxRates": true,
//             "unitName": "",
//             "cost": 0,
//             "isRevenue": true,
//             "modifiedTime": 1552364023000,
//             "priceWithoutVat": 0
//         },
//         {
//             "id": "Z5ESKR8FCNZ8G",
//             "hidden": false,
//             "name": "Tea",
//             "alternateName": "",
//             "code": "",
//             "sku": "",
//             "price": 200,
//             "priceType": "FIXED",
//             "defaultTaxRates": true,
//             "unitName": "",
//             "isRevenue": true,
//             "modifiedTime": 1552364052000,
//             "priceWithoutVat": 0
//         },
//         {
//             "id": "7Z5RASMGCNBSJ",
//             "hidden": false,
//             "name": "Mango Lassi",
//             "alternateName": "",
//             "code": "",
//             "price": 299,
//             "priceType": "FIXED",
//             "defaultTaxRates": true,
//             "unitName": "",
//             "cost": 0,
//             "isRevenue": true,
//             "modifiedTime": 1524517575000
//         },
//         {
//             "id": "BZCSBP29GTRYW",
//             "hidden": false,
//             "name": "Mango Shake",
//             "alternateName": "",
//             "code": "",
//             "sku": "",
//             "price": 600,
//             "priceType": "FIXED",
//             "defaultTaxRates": true,
//             "unitName": "",
//             "cost": 0,
//             "isRevenue": true,
//             "modifiedTime": 1552364072000,
//             "priceWithoutVat": 0
//         },
//         {
//             "id": "VSQ66YDY0D5MA",
//             "hidden": false,
//             "name": "Strawberry Shake",
//             "alternateName": "",
//             "code": "",
//             "sku": "",
//             "price": 600,
//             "priceType": "FIXED",
//             "defaultTaxRates": true,
//             "unitName": "",
//             "cost": 0,
//             "isRevenue": true,
//             "modifiedTime": 1552364125000,
//             "priceWithoutVat": 0
//         },
//         {
//             "id": "RFFYARF946QFW",
//             "hidden": false,
//             "name": "Rose Milk",
//             "alternateName": "",
//             "code": "",
//             "sku": "",
//             "price": 500,
//             "priceType": "FIXED",
//             "defaultTaxRates": true,
//             "unitName": "",
//             "cost": 0,
//             "isRevenue": true,
//             "modifiedTime": 1552364136000,
//             "priceWithoutVat": 0
//         }
//     ],
//     "href": "http://api.clover.com/v3/merchants/03ZTNPJW6K942/categories/KTAFAM73EHP94/items?limit=100"
// }

$scope.gotoitemdescription = function(item){
    console.log(item)
    $window.localStorage.selecteditem = JSON.stringify(item);
    $state.go('itemdetail', {}, {reload: true});

}

}])