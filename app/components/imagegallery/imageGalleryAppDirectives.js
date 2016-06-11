const IMAGE_ON_LOAD_DIRECTIVE = 'imageonload';

imageGalleryhApp.directive(IMAGE_ON_LOAD_DIRECTIVE, function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('load', function () {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});