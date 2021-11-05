function ContentManager() {
    var ondownloadcompleted;

    this.setDownloadCompleted = function (callbackMethod) {
        ondownloadcompleted = callbackMethod;
        ondownloadcompleted();
    };

}