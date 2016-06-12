const MODULE_NAME = 'imageGalleryApp';
const CONTROLLER_NAME = 'ImageGalleryController';

var imageGalleryhApp = angular.module(MODULE_NAME, []);

imageGalleryhApp.filter('pagination', function () {
    return function (input, start) {
        if (!input || !input.length) {
            return;
        }
        start = +start;
        return input.slice(start);
    };
});

imageGalleryhApp.controller(CONTROLLER_NAME, function ($scope, $http, paginationService, imageSearchService) {
        $scope.images = [];
        $scope.paginationService = paginationService;

        $scope.getLoadingImageSource = function () {
            return imageSearchService.loadingImageSource;
        };

        $scope.isThumbnailLoaded = function () {
            if ($scope.getImage() !== undefined) {
                return $scope.getImage().isThumbnailLoaded;
            }
            return false;
        };

        $scope.setIsThumbnailImageLoaded = function () {
            if ($scope.getImage() !== undefined) {
                $scope.getImage().isThumbnailLoaded = true;
            }
            return false;
        };

        $scope.isPreviewLoaded = function () {
            if ($scope.getImage() !== undefined) {
                return $scope.getImage().isPreviewLoaded;
            }
            return false;
        };

        $scope.setIsPreviewLoaded = function () {
            if ($scope.getImage() !== undefined) {
                $scope.getImage().isPreviewLoaded = true;
            }
            return false;
        };

        $scope.mouseOverOnImage = function (currentImageIndex) {
            paginationService.setCurrentItemIndex(currentImageIndex);
        };

        $scope.getImage = function () {
            return $scope.images[paginationService.getCurrentItemIndex()];
        };

        $scope.getImageSource = function () {
            var image = $scope.getImage();
            if (image === undefined) {
                return "";
            }
            return $scope.resolution === 'HIGH' ? image.highResolutionLink : image.lowResolutionLink;
        };

        $scope.searchImages = function () {
            if ($scope.searchCriteria.tags === undefined
                || $scope.searchCriteria.tags.trim() === "") {
                return false;
            }
            $scope.images = [];
            imageSearchService.performSearch($scope.searchCriteria, $scope.initializeGallery);
        };

        $scope.initializeGallery = function (images) {
            $scope.images = images;
            paginationService.setCurrentPageIndex(0);
            paginationService.setCurrentItemIndex(0);
            paginationService.setNumberOfItems(Object.keys($scope.images).length);
            paginationService.setNumberOfPages(Object.keys($scope.images).length);
        };
    }
);