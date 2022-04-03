var PreLoadScreen = /** @class */ (function () {
    introContainer = new PIXI.Container();
    var loadingtext = new PIXI.Text("Loading...");
    introContainer.addChild(loadingtext);
    loadingtext.position.set(150, 200);
    Loader(loadingtext);
    var button = createContinueButton();
    introContainer.addChild(button);
    main.addChild(introContainer);
    introContainer.name = "introContainer";

    function createContinueButton() {
        var button = Button();
        var continueTxt = new PIXI.Text("Continue");
        continueTxt.position.set(150, 200);
        button.on('pointertap', function (button) {
            hideIntroScreen(button)
        });
        button.addChild(continueTxt);
        return button;
    }
    function hideIntroScreen(e) {
        e.currentTarget.visible = false;
        GameScreen();
        introContainer.visible = false;

    }

});