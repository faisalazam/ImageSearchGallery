const PICASA_LOADING_IMAGE_SOURCE = "../../../assets/images/picasa.gif";
const PICASA_IMAGE_SEARCH_SERVICE_NAME = "picasaImageSearchService";
const PICASA_API_URL = "https://picasaweb.google.com/data/feed/api/user/takazudo/albumid/5579032834644034737";

imageGalleryhApp.service(PICASA_IMAGE_SEARCH_SERVICE_NAME, function ($http) {

        this.loadingImageSource = PICASA_LOADING_IMAGE_SOURCE;

        this.performSearch = function (searchCriteria, callback) {
            $http.jsonp(PICASA_API_URL, {
                params: {
                    alt: "json",
                    kind: "photo",
                    fields: "author,gphoto:name,entry(media:group(media:title,media:content,media:thumbnail,media:content))",
                    callback: "callbackToInitializeGallery"
                }
            });


            callbackToInitializeGallery = function (images) {
                if (typeof callback === "function") {
                    const feed = images.feed;
                    const transformedImages = [];
                    const author = feed.author[0];
                    feed.entry.forEach(function (image) {
                        const mediaGroup = image.media$group;
                        var transformedImage = {
                            link: mediaGroup.media$content[mediaGroup.media$content.length - 1].url,
                            tags: image.tags,
                            title: mediaGroup.media$title.$t,
                            author: author.name.$t,
                            isPreviewLoaded: false,
                            isThumbnailLoaded: false,
                            lowResolutionLink: mediaGroup.media$thumbnail[mediaGroup.media$thumbnail.length - 1].url,
                            highResolutionLink: mediaGroup.media$content[mediaGroup.media$content.length - 1].url,
                            albumLink: author.uri.$t + "/" + feed.gphoto$name.$t
                        };
                        transformedImages.push(transformedImage);
                    });
                    callback(transformedImages);
                }
            };
        };
    }
);