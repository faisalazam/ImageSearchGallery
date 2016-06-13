const INSTAGRAM_LOADING_IMAGE_SOURCE = "../../../assets/images/instagram.gif";
const INSTAGRAM_IMAGE_SEARCH_SERVICE_NAME = "instagramImageSearchService";
const INSTAGRAM_API_URL = "https://api.instagram.com/v1/tags/{tag}/media/recent";

imageGalleryhApp.service(INSTAGRAM_IMAGE_SEARCH_SERVICE_NAME, function ($http) {

        this.loadingImageSource = INSTAGRAM_LOADING_IMAGE_SOURCE;

        this.performSearch = function (searchCriteria, callback) {
            $http.jsonp(INSTAGRAM_API_URL.replace("{tag}", searchCriteria.tags), {
                params: {
                    callback: "callbackToInitializeGallery",
                    access_token: "3318175510.8c78cd0.da1a245d36494b17874c51ebb3f06197"
                }
            });

            callbackToInitializeGallery = function (images) {
                if (typeof callback === "function") {
                    var transformedImages = [];

                    images.data.forEach(function (image) {
                        var transformedImage = {
                            link: image.link,
                            tags: image.tags.join(", "),
                            title: image.title,
                            author: image.user.full_name,
                            isPreviewLoaded: false,
                            isThumbnailLoaded: false,
                            lowResolutionLink: image.images.thumbnail.url,
                            highResolutionLink: image.images.standard_resolution.url,
                            albumLink: image.images.standard_resolution.url
                        };
                        transformedImages.push(transformedImage);
                    });
                    callback(transformedImages);
                }
            };
        };
    }
);