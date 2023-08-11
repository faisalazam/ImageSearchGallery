# ImageSearchGallery

It is an AngularJS application, that can be used to search for images (from image hosting websites like Flickr, Imgur, Instagram, and Picasa) with specified tags. The result of the search activity will be displayed in a nicely formatted photo gallery (i.e., thumbnails with some information and pagination, as well as a preview of the mouseover photo, which will have its own pagination).

This is a live search app, i.e., the photo gallery will keep building as the user keeps typing the search tags. The search tags need to be separated by commas, otherwise, they'll be considered one big combined tag.

There are two types of paginations in this app; one will allow the user to navigate through the different pages of images, whereas the other will allow the user to navigate through the images themselves. These two components also update each other smartly on navigations.

This app also provides the flexibility to choose whether the preview needs to be displayed in high resolution, or in low resolution. This feature has been added, because sometimes, internet connectivity is poor and loading high resolution images is slow, so the low resolution option could be used in such cases to quickly go through the image gallery.

This app can be tested at:
~~https://rawgit.com/faisalazam/ImageSearchGallery/master/app/components/imagegallery/imageGalleryApp.html~~
[Click here for live demo.] (https://faisalazam.github.io/ImageSearchGallery/app/components/imagegallery/imageGalleryApp.html)

and in [CodePen](https://codepen.io/faisalazam_1616/full/gMaqGq/) (but the code might be outdated here) as well.

Scrolling is disabled, and hence, no scroll bars will be visible. So, just in case, you feel like that some controls are missing on the page, try to maximize the browser window. Or if you are testing it in CodePen, then change the CodePen layout to look like as the image below:
![Alt text](imageGalleryAppScreenshot.png?raw=true "Image Gallery App Screenshot")

In order to play with this app, unzip the downloaded folder, and open [imageGalleryApp.html](app/components/imagegallery/imageGalleryApp.html) in some web browser (internet connectivity is required as the app will make calls to image hosting websites).
