var MODULE_NAME = 'imageSearchApp';
var CONTROLLER_NAME = 'FlickrImageSearchController';
var FLICKR_API_URL = "http://api.flickr.com/services/feeds/photos_public.gne";

var imageSearchApp = angular.module(MODULE_NAME, []);

imageSearchApp.filter('pagination', function () {
    return function (input, start) {
        if (!input || !input.length) {
            return;
        }
        start = +start;
        return input.slice(start);
    };
});

imageSearchApp.controller(CONTROLLER_NAME,
    function FlickrImageSearchController($scope, $http) {

        $scope.photo = {};
        $scope.images = [];
        $scope.pageSize = 4;
        $scope.numberOfPages = 0;
        $scope.numberOfImages = 0;
        $scope.currentPageIndex = 0;
        $scope.currentImageIndex = 0;

        $scope.mouseOverOnImage = function (currentImageIndex) {
            $scope.currentImageIndex = currentImageIndex + ($scope.currentPageIndex * $scope.pageSize);
        };

        $scope.setCurrentPageOnImageNavigation = function () {
            $scope.currentPageIndex = (Math.ceil(($scope.currentImageIndex + 1) / $scope.pageSize)) - 1;
        };

        $scope.isCurrentImageIndexInvalid = function () {
            return $scope.currentImageIndex < 0 || $scope.currentImageIndex >= $scope.numberOfImages - 1;
        };

        $scope.searchImages = function () {
            if ($scope.searchCriteria.tags == undefined
                || $scope.searchCriteria.tags.trim() == "") {
                return false;
            }

            var FLICKR_API_URL_WITH_PARAMS = FLICKR_API_URL
                + "?tags=" + $scope.searchCriteria.tags
                + "&tagmode=" + $scope.searchCriteria.mode
                + "&format=json";
            $http.jsonp(FLICKR_API_URL_WITH_PARAMS).success(function (data) {
            });

        };

        jsonFlickrFeed = function (images) {
            $scope.currentPageIndex = 0;
            $scope.currentImageIndex = 0;
            $scope.images = images.items;
            $scope.numberOfImages = Object.keys($scope.images).length;
            $scope.numberOfPages = Math.ceil($scope.numberOfImages / $scope.pageSize);
        };
    }
);