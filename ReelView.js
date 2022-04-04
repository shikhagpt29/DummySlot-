var ReelView = /** @class */ (function () {
    var reels = [];
    var relPos = [["hv2", "lv3", "lv3"],
                 ["hv1", "lv1", "lv2"],
                 ["hv2", "lv3", "lv1"],
                 ["hv3", "lv1", "lv2"],
                 ["hv2", "lv2", "lv1"],];
    var symW = 128;

    function mainF() {
        //console.log("positions", positions);
        for (var reelId = 0; reelId < 5; reelId++) {
            reels.push(createReels(reelId));
            gameContainer.addChild(reels[reelId]);
        }
    }
    function createReels(reelId) {
        var offSet = 10;
        var reelView = new PIXI.Container();
        reelView.name = "reel_" + reelId;
        reelView.position.x = reelId * symW + offSet * reelId;
        for (var symId = 0; symId < 3; symId++) {
            var sprite = Symbol(relPos[reelId][symId]);
            sprite.position.y = symId * symW + offSet * symId;
            reelView.addChild(sprite);
        }
        return reelView;
    }

    mainF();
    return{
        reels:reels
    }
});
