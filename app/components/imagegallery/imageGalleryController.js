var MODULE_NAME = 'imageGalleryApp';
var CONTROLLER_NAME = 'ImageGalleryController';

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
    function ImageGalleryController($scope, $http, $flickrImageSearchService) {

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

        $scope.getImageSource = function () {
            var image = $scope.images[$scope.currentImageIndex];
            if (image === undefined) {
                return "";
            } else if ($scope.resolution === 'HIGH') {
                return image.media.m.replace('m.jpg', 'b.jpg');
            }
            return image.media.m;
        };

        $scope.searchImages = function () {
            if ($scope.searchCriteria.tags === undefined
                || $scope.searchCriteria.tags.trim() === "") {
                return false;
            }

            $flickrImageSearchService.performSearch($scope.searchCriteria, $scope.initializeGallery);
        };

        $scope.initializeGallery = function (images) {
            $scope.images = images;
            $scope.currentPageIndex = 0;
            $scope.currentImageIndex = 0;
            $scope.numberOfImages = Object.keys($scope.images).length;
            $scope.numberOfPages = Math.ceil($scope.numberOfImages / $scope.pageSize);
        };
    }
);