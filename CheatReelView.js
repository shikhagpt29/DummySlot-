var CheatReelView = /** @class */ (function () {
    function showReelArea() {
        updatedReels = [
            ["hv2", "lv3", "lv3"],
            ["hv2", "lv1", "lv3"],
            ["hv2", "lv3", "lv4"],
            ["lv1", "hv1", "lv2"],
            ["hv1", "lv2", "hv1"]];
        for (var reelId = 0; reelId < 5; reelId++) {
            for (var symId = 0; symId < 3; symId++) {
                reels[reelId].children[symId].texture = loader.resources[updatedReels[reelId][symId]].texture;
            }
        }
        displayWin();
    }

    function displayWin() {
        if (!gameContainer.getChildByName("winText")) {
            style = new PIXI.TextStyle({
                wordWrap: true,
                breakWords: true,
                wordWrapWidth: 300
            });
            winText = new PIXI.Text('', style);
            winText.name = "winText";
            winText.position.set(140, 415);
            gameContainer.addChild(winText);
        } else {
            winText = gameContainer.getChildByName("winText");
        }
        winText.text = "";
        addText = "";
        var totalWin = WinPresentClass(updatedReels).totalWin;
        var winCombinations = WinPresentClass(updatedReels).winCombinations;
        if (totalWin) {
            console.log("Total win  : ", totalWin);
            text = "Total win  : " + totalWin;
            for (var wc = 0; wc < winCombinations.length; wc++) {
                addText += "\n" + "payline " + winCombinations[wc].payline + ", "
                    + winCombinations[wc].sym + " x" + winCombinations[wc].count + "," + " " + winCombinations[wc].multiplier;
            }
        } else {
            text = "You Won nothing";
        }

        winText.text = text + addText;
    }

    return {
        showReelArea: showReelArea
    }
}());