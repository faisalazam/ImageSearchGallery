const PAGINATION_SERVICE_NAME = "paginationService";

imageGalleryhApp.service(PAGINATION_SERVICE_NAME, function () {

        this.pageSize = 4;
        this.numberOfPages = 0;
        this.numberOfItems = 0;
        this.currentItemIndex = 0;
        this.currentPageIndex = 0;

        this.setNumberOfPages = function (numberOfItems) {
            this.numberOfPages = Math.ceil(numberOfItems / this.pageSize);
        };

        this.getNumberOfPages = function () {
            return this.numberOfPages;
        };

        this.setNumberOfItems = function (numberOfItems) {
            this.numberOfItems = numberOfItems;
        };

        this.getNumberOfItems = function () {
            return this.numberOfItems;
        };

        this.setCurrentPageIndex = function (currentPageIndex) {
            this.currentPageIndex = currentPageIndex;
        };

        this.getCurrentPageIndex = function () {
            return this.currentPageIndex;
        };

        this.setCurrentItemIndex = function (currentItemIndex) {
            this.currentItemIndex = currentItemIndex + (this.currentPageIndex * this.pageSize);
        };

        this.getCurrentItemIndex = function () {
            return this.currentItemIndex;
        };

        this.getPageSize = function () {
            return this.pageSize;
        };

        this.navigateToFirstPage = function () {
            this.currentPageIndex = 0;
            this.currentItemIndex = 0;
        };

        this.navigateToPreviousPage = function () {
            this.currentPageIndex = this.currentPageIndex - 1;
            this.currentItemIndex = this.currentPageIndex * this.pageSize;
        };

        this.navigateToNextPage = function () {
            this.currentPageIndex = this.currentPageIndex + 1;
            this.currentItemIndex = this.currentPageIndex * this.pageSize;
        };

        this.navigateToLastPage = function () {
            this.currentPageIndex = this.numberOfItems / this.pageSize - 1;
            this.currentItemIndex = this.numberOfItems - this.pageSize;
        };

        this.canNavigateToFirstPage = function () {
            return this.canNavigateToPreviousPage();
        };

        this.canNavigateToPreviousPage = function () {
            return this.currentPageIndex === 0;
        };

        this.canNavigateToNextPage = function () {
            return this.currentPageIndex >= this.numberOfItems / this.pageSize - 1;
        };

        this.canNavigateToLastPage = function () {
            return this.canNavigateToNextPage();
        };

        this.navigateToFirstItem = function () {
            this.currentPageIndex = 0;
            this.currentItemIndex = 0;
        };

        this.navigateToPreviousItem = function () {
            this.currentItemIndex = this.currentItemIndex - 1;
            this.setCurrentPageOnItemNavigation();
        };

        this.navigateToNextItem = function () {
            this.currentItemIndex = this.currentItemIndex + 1;
            this.setCurrentPageOnItemNavigation();
        };

        this.navigateToLastItem = function () {
            this.currentPageIndex = this.numberOfItems / this.pageSize - 1;
            this.currentItemIndex = this.numberOfItems - 1;
        };

        this.canNavigateToFirstItem = function () {
            return this.canNavigateToPreviousItem();
        };

        this.canNavigateToPreviousItem = function () {
            return this.currentPageIndex === 0;
        };

        this.canNavigateToNextItem = function () {
            return this.currentItemIndex < 0 || this.currentItemIndex >= this.numberOfItems - 1;
        };

        this.canNavigateToLastItem = function () {
            return this.canNavigateToNextItem();
        };

        this.setCurrentPageOnItemNavigation = function () {
            this.currentPageIndex = (Math.ceil((this.currentItemIndex + 1) / this.pageSize)) - 1;
        };

        this.showItemPreviewSection = function () {
            return this.numberOfItems > 0;
        };

        this.showItemsListSection = function () {
            return this.numberOfItems > this.pageSize;
        };

        this.pagesStatusMessage = function () {
            return (this.currentPageIndex + 1) + " of " + this.numberOfPages;
        };

        this.itemsStatusMessage = function () {
            return (this.currentItemIndex + 1) + " of " + this.numberOfItems;
        };
    }
);