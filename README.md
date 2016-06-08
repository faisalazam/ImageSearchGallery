# ng-flickrImageSearchGallery

It is an AngularJs application, which can be used to search for images (from Flickr) with specified tags. The result of the search activity will be displayed in a nicely formatted photo gallery (i.e. thumbnails with some information and alongwith pagination, as well as preview of the mouseover photo, which will have its own pagination).

This is a live search app, i.e. the photo gallery will keep building as the user keep typing the search tags. The search tags need to be separated by commas, otherwise they'll be considered as one big combined tag.

There are two types of paginations in this app; one will allow the user to navigate through the different pages of images, whereas the other will allow the user to navigate through the images itself. These two components also update each other smartly on navigations.
