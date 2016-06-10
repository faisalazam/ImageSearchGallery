# ImageSearchGallery

It is an AngularJs application, which can be used to search for images (from Flickr) with specified tags. The result of the search activity will be displayed in a nicely formatted photo gallery (i.e. thumbnails with some information and alongwith pagination, as well as preview of the mouseover photo, which will have its own pagination).

This is a live search app, i.e. the photo gallery will keep building as the user keep typing the search tags. The search tags need to be separated by commas, otherwise they'll be considered as one big combined tag.

There are two types of paginations in this app; one will allow the user to navigate through the different pages of images, whereas the other will allow the user to navigate through the images itself. These two components also update each other smartly on navigations.

This app also provides the flexibility to choose whether the preview needs to be displayed with high resolution, or with low resolution. This feature has been added, because sometimes, internet connectivity is not good and loading the high resolution images is slow, so low resolution option could be used in such cases to quickly go through the image gallery.

This app can be tested in CodePen as well, link is: https://codepen.io/faisalazam_1616/pen/gMaqGq

Scrolling is disabled and hence, no scroll bars will be visible. So, just in case, you feel like that some controls are missing on the page, then try to maximise the browser window. Or if you are testing it in CodePen, then change the CodePen layout to look like as the image below:
![Alt text](imageGalleryAppScreenshot.png?raw=true "Image Gallery App Screenshot")

In order to play with this app, unzip the downloaded folder, and open the "app/components/imagegallery/imageGalleryApp.html" in some web browser (internet connectivity is required as the app will make calls to Flickr).
