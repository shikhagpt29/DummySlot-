var Loader = /** @class */ (function (loadingtext) {

    loader.add('hv1', 'assets/hv1_symbol.png')
        .add('hv2', 'assets/hv2_symbol.png')
        .add('hv3', 'assets/hv3_symbol.png')
        .add('hv4', 'assets/hv4_symbol.png')
        .add('lv1', 'assets/lv1_symbol.png')
        .add('lv2', 'assets/lv2_symbol.png')
        .add('lv3', 'assets/lv3_symbol.png')
        .add('lv4', 'assets/lv4_symbol.png')
        .add('spin', 'assets/spin_button.png').load();
    loader.onProgress.add(function (loader) {
        return onLoaderProgress(loader);
    });
    onLoaderProgress = function (loader) {
        loadingtext.text = "Loading.." + loader.progress + "%";
    };
    loader.onComplete.add(function () {
        loadingtext.text = "Loaded.." + loader.progress + "%";
    });
});