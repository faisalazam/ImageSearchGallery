imageGalleryhApp.factory('imageSearchService', function ($injector) {
    return {
        get: function (searchServer) {
            if (searchServer === 'imgur') {
                return $injector.get(IMGUR_IMAGE_SEARCH_SERVICE_NAME);
            } else if (searchServer === 'picasa') {
                return $injector.get(PICASA_IMAGE_SEARCH_SERVICE_NAME);
            } else if (searchServer === 'instagram') {
                return $injector.get(INSTAGRAM_IMAGE_SEARCH_SERVICE_NAME);
            }
            return $injector.get(FLICKR_IMAGE_SEARCH_SERVICE_NAME);
        }
    }
});