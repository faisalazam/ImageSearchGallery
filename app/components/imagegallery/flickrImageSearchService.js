const FLICKR_LOADING_IMAGE_SOURCE = "../../../flickr.gif";
const FLICKR_IMAGE_SEARCH_SERVICE_NAME = "flickrImageSearchService";
const FLICKR_API_URL = "https://api.flickr.com/services/feeds/photos_public.gne";

imageGalleryhApp.service(FLICKR_IMAGE_SEARCH_SERVICE_NAME, function ($http) {

        this.loadingImageSource = FLICKR_LOADING_IMAGE_SOURCE;

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
                    var transformedImages = [];

                    images.items.forEach(function (image) {
                        var transformedImage = {
                            link: image.link,
                            tags: image.tags,
                            title: image.title,
                            author: image.author,
                            authorId: image.author_id,
                            lowResolutionLink: image.media.m,
                            highResolutionLink: image.media.m.replace('m.jpg', 'b.jpg')
                        };
                        transformedImages.push(transformedImage);
                    });
                    callback(transformedImages);
                }
            };
        };
    }
);