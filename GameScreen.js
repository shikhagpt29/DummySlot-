var GameScreen = /** @class */ (function () {
    gameContainer = new PIXI.Container();
    main.addChild(gameContainer);
    gameContainer.name = "gameContainer";
    gameContainer.position.set(15, 30);
    reels = ReelView().reels;
    var spinButton = createSpinButton();
    spinButton.position.set(677, 203);
    gameContainer.addChild(spinButton);
    var showCheatButttn = createWinButton();
    showCheatButttn.position.set(580, 433);
    gameContainer.addChild(showCheatButttn);

    function createWinButton() {
        var button = Button();
        var defaultTex = new PIXI.Text("Show Win Stops");
        button.on('pointertap', function () {
            CheatReelView.showReelArea();
        });
        button.addChild(defaultTex);
        button.backgroundColor = 0x061639;
        return button;
    }

    function createSpinButton() {
        var button = Button();
        var sprite = new PIXI.Sprite(loader.resources["spin"].texture);
        sprite.width = sprite.width / 2;
        sprite.height = sprite.height / 2;
        button.on('pointertap', function () {
            UpdateReelView.showReelArea();
        });
        button.addChild(sprite);
        return button;
    }

});