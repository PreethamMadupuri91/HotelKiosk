app.controller('HomeController', ['$scope', '$state', '$ionicSlideBoxDelegate', 'API_ENDPOINT', '$http', '$location', '$timeout','$window', function ($scope, $state, $ionicSlideBoxDelegate, API_ENDPOINT, $http, $location, $timeout,$window) {

    $scope.gotomenu = function () {
        $location.path('menu');
    }


    $scope.menu_categories = [];
    $scope.menu_item = [];
    $scope.menu_detail = [];
    $scope.temp_arr = [];
    $scope.local_items = [];

    var catg_item_count = 0;

    $scope.getcategory = function () {

        // get category

        $http.get(API_ENDPOINT.api_url).then(function (response) {

            $scope.categories = response.data.elements;

            _.each($scope.categories, function (item) {
                $scope.menu_categories.push({ catg_id: item.id, catg_name: item.name, catg_sort_order: item.sortOrder })
            });
            $scope.temp_arr = $scope.menu_categories.slice();
            $window.localStorage.setItem('menu_catg', JSON.stringify($scope.menu_categories));
            getitems();
        });

    }

    $scope.getitemdetails = function () {

        // get item details from google sheets

        $http.get('https://sheets.googleapis.com/v4/spreadsheets/1fxNdpIQBl0AfvmQJ86H2Z7-aISfKwL0I8ShSabtFWo8/values/IgTestMenu?key=AIzaSyBx1haq9XFfJTZD1iL2zNzWBWsAjL6lKRw/').then(function (response) {
            $scope.sheet_data = response.data.values;
            // _.each($scope.sheet_data, function (item) {
            //     $scope.menu_detail.push({ id: item[0], name: item[1], description: item[2], image_url: item[3] })
            // });
        });
    }


    $scope.getitemdetails();
    $scope.getcategory();

    var getitems = function () {
        var split_val = 5;
        var cat_grouped = [];
        var catg_set_count = Math.round(18 / split_val);

        for (i = 0; i < catg_set_count; i++) {
            cat_grouped.push($scope.menu_categories.splice(0, 4));
        }

        cat_grouped.push($scope.menu_categories);
        console.log(cat_grouped)

        function doreqinloop(arr_set, callback) {
            var req_succ_count = 1;

            angular.forEach(arr_set, function (item) {
                catg_item_count++;

                $http.get(API_ENDPOINT.api_url + API_ENDPOINT.merchant_id + '/categories/' + item.catg_id + '/items' + '?' + API_ENDPOINT.access_token + API_ENDPOINT.auth_token).then(function (response) {
                    $scope.menu_item.push(response.data.elements);
                    console.log($scope.menu_item);
                });

                req_succ_count++;
                console.log(req_succ_count)
                if (req_succ_count == split_val) {
                    callback();
                }
                console.log($scope.menu_item.length)
                if($scope.temp_arr.length == catg_item_count){
                    console.log('condition check')
                    setdetails();
                }

            });
        }

        var cat_grouped_index = 0;
        var doreqinloop_count = cat_grouped.length;

        function getcatgitems() {
            doreqinloop(cat_grouped[cat_grouped_index], function () {
                doreqinloop_count--;
                console.log(doreqinloop_count)
                if (doreqinloop_count > 0) {
                    setTimeout(function () {
                        cat_grouped_index++;
                        getcatgitems();
                    }, 3000)
                }
                console.log($scope.menu_item.length)
            })

        }

        getcatgitems();
        console.log($scope.temp_arr.length,$scope.menu_item)

    }

    function setdetails() {
        console.log($scope.temp_arr.length, $scope.menu_item.length);

        $scope.local_items = [];

        _.each($scope.sheet_data, function (menu_item) {
            var item_id = menu_item[0];
            var item_catg = menu_item[1];
            var item_desc = menu_item[3];
            var item_image = menu_item[4];
            _.each($scope.menu_item, function (item) {
                _.each(item, function (prdt) {
                    if (item_id == prdt.id) {
                        $scope.local_items.push({ id: item_id, catg_id: item_catg, name: prdt.name, description: item_desc, image_url: item_image, price: prdt.price })
                    }
                })
            })
        })



        // _.each($scope.menu_item, function (menu_item) {
        //     console.log(menu_item)
        //     _.each($scope.menu_detail, function (item2) {
        //         console.log(item2)
        //     })
        // })
        console.log($scope.local_items);
        $window.localStorage.setItem("menu_items", JSON.stringify($scope.local_items));
    }

    console.log($scope.temp_arr.length,$scope.menu_item);


}])
