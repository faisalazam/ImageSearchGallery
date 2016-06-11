imageGalleryhApp.factory('imageSearchService', function ($injector) {
    //return different service objects like 'FlickrImageSearchService',
    // 'InstagramImageSearchService' etc based on user's selection on page
    return $injector.get(FLICKR_IMAGE_SEARCH_SERVICE_NAME);
});