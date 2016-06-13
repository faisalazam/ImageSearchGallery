const IMGUR_LOADING_IMAGE_SOURCE = "../../../assets/images/imgur.gif";
const IMGUR_IMAGE_SEARCH_SERVICE_NAME = "imgurImageSearchService";
const IMGUR_API_URL = "https://api.imgur.com/3/gallery/t/";

imageGalleryhApp.service(IMGUR_IMAGE_SEARCH_SERVICE_NAME, function ($http) {

        this.loadingImageSource = IMGUR_LOADING_IMAGE_SOURCE;

        this.performSearch = function (searchCriteria, callback) {

            var that = this;
            const url = IMGUR_API_URL + searchCriteria.tags;
            $http.get(url, {
                headers: {
                    Authorization: 'Client-ID f969a38ad30638f'
                }
            }).success(function (data) {
                that.callbackToInitializeGallery(url, data, callback);
            });

        };
        this.callbackToInitializeGallery = function (url, images, callback) {
            if (typeof callback === "function") {
                var that = this;
                var transformedImages = [];

                images.data.items.forEach(function (image) {
                    var transformedImage = {
                        link: image.link,
                        tags: image.tags,
                        title: image.title,
                        author: image.author,
                        isPreviewLoaded: false,
                        isThumbnailLoaded: false,
                        lowResolutionLink: that.addImageSizeToLink(image.link, 'm'),
                        highResolutionLink: that.addImageSizeToLink(image.link, 'h'),
                        albumLink: url
                    };
                    transformedImages.push(transformedImage);
                });
                callback(transformedImages);
            }
        };

        this.addImageSizeToLink = function (link, size) {
            var extStart = link.indexOf('.', link.lastIndexOf('/') + 1);
            if (extStart === -1) {
                return link;
            }
            var pos = link.lastIndexOf('.');
            return link.substring(0, pos) + size + link.substring(pos);
        }
    }
);