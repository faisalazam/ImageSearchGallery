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

imageGalleryhApp.controller(CONTROLLER_NAME, function ($scope, $http, imageSearchService) {
        $scope.images = [];
        $scope.pageSize = 4;
        $scope.numberOfPages = 0;
        $scope.numberOfImages = 0;
        $scope.currentPageIndex = 0;
        $scope.currentImageIndex = 0;

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
            $scope.currentImageIndex = currentImageIndex + ($scope.currentPageIndex * $scope.pageSize);
        };

        $scope.setCurrentPageOnImageNavigation = function () {
            $scope.currentPageIndex = (Math.ceil(($scope.currentImageIndex + 1) / $scope.pageSize)) - 1;
        };

        $scope.navigateToFirstPage = function () {
            $scope.currentPageIndex = 0;
            $scope.currentImageIndex = 0;
        };

        $scope.navigateToPreviousPage = function () {
            $scope.currentPageIndex = $scope.currentPageIndex - 1;
            $scope.currentImageIndex = $scope.currentPageIndex * $scope.pageSize;
        };

        $scope.navigateToNextPage = function () {
            $scope.currentPageIndex = $scope.currentPageIndex + 1;
            $scope.currentImageIndex = $scope.currentPageIndex * $scope.pageSize;
        };

        $scope.navigateToLastPage = function () {
            $scope.currentPageIndex = $scope.numberOfImages / $scope.pageSize - 1;
            $scope.currentImageIndex = $scope.numberOfImages - $scope.pageSize;
        };

        $scope.canNavigateToFirstPage = function () {
            return $scope.canNavigateToPreviousPage();
        };

        $scope.canNavigateToPreviousPage = function () {
            return $scope.currentPageIndex === 0;
        };

        $scope.canNavigateToNextPage = function () {
            return $scope.currentPageIndex >= $scope.numberOfImages / $scope.pageSize - 1;
        };

        $scope.canNavigateToLastPage = function () {
            return $scope.canNavigateToNextPage();
        };

        $scope.navigateToFirstImage = function () {
            $scope.currentPageIndex = 0;
            $scope.currentImageIndex = 0;
        };

        $scope.navigateToPreviousImage = function () {
            $scope.currentImageIndex = $scope.currentImageIndex - 1;
            $scope.setCurrentPageOnImageNavigation();
        };

        $scope.navigateToNextImage = function () {
            $scope.currentImageIndex = $scope.currentImageIndex + 1;
            $scope.setCurrentPageOnImageNavigation();
        };

        $scope.navigateToLastImage = function () {
            $scope.currentPageIndex = $scope.numberOfImages / $scope.pageSize - 1;
            $scope.currentImageIndex = $scope.numberOfImages - 1;
        };

        $scope.canNavigateToFirstImage = function () {
            return $scope.canNavigateToPreviousImage();
        };

        $scope.canNavigateToPreviousImage = function () {
            return $scope.currentPageIndex === 0;
        };

        $scope.canNavigateToNextImage = function () {
            return $scope.currentImageIndex < 0 || $scope.currentImageIndex >= $scope.numberOfImages - 1;
        };

        $scope.canNavigateToLastImage = function () {
            return $scope.canNavigateToNextImage();
        };

        $scope.getImage = function () {
            return $scope.images[$scope.currentImageIndex];
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
            $scope.currentPageIndex = 0;
            $scope.currentImageIndex = 0;
            $scope.numberOfImages = Object.keys($scope.images).length;
            $scope.numberOfPages = Math.ceil($scope.numberOfImages / $scope.pageSize);
        };
    }
);