var SERVICE_NAME = "$flickrImageSearchService";
var FLICKR_API_URL = "https://api.flickr.com/services/feeds/photos_public.gne";

imageSearchApp.service(SERVICE_NAME,
    function FlickrImageSearchService($http) {

        this.performSearch = function (searchCriteria, callback) {
            $http.jsonp(FLICKR_API_URL, {
                params: {
                    format: "json",
                    tags: searchCriteria.tags,
                    tagmode: searchCriteria.mode,
                    jsoncallback: "callbackToInitializeGallery"
                }
            });

            callbackToInitializeGallery = function (images) {
                if (typeof callback === "function") {
                    callback(images.items);
                }
            };
        };
    }
);