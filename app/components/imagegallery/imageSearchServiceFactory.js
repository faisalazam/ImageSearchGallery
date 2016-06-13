imageGalleryhApp.factory('imageSearchService', function ($injector) {
    return {
        get: function(searchServer){
            if (searchServer === 'picasa') {
                return $injector.get(PICASA_IMAGE_SEARCH_SERVICE_NAME);
            }
            return $injector.get(FLICKR_IMAGE_SEARCH_SERVICE_NAME);
        }
    }
});