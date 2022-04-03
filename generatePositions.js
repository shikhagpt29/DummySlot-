var generatePositions = /** @class */ (function () {
    var updatedReels = [[]];

    function testThis() {
        var reels = [
            ["hv2", "lv3", "lv3", "hv1", "hv1", "lv1", "hv1", "hv4", "lv1", "hv3", "hv2", "hv3", "lv4", "hv4", "lv1", "hv2", "lv4", "lv1", "lv3", "hv2"],
            ["hv1", "lv2", "lv3", "lv2", "lv1", "lv1", "lv4", "lv1", "lv1", "hv4", "lv3", "hv2", "lv1", "lv3", "hv1", "lv1", "lv2", "lv4", "lv3", "lv2"],
            ["lv1", "hv2", "lv3", "lv4", "hv3", "hv2", "lv2", "hv2", "hv2", "lv1", "hv3", "lv1", "hv1", "lv2", "hv3", "hv2", "hv4", "hv1", "lv2", "lv4"],
            ["hv2", "lv2", "hv3", "lv2", "lv4", "lv4", "hv3", "lv2", "lv4", "hv1", "lv1", "hv1", "lv2", "hv3", "lv2", "lv3", "hv2", "lv1", "hv3", "lv2"],
            ["lv3", "lv4", "hv2", "hv3", "hv4", "hv1", "hv3", "hv2", "hv2", "hv4", "hv4", "hv2", "lv2", "hv4", "hv1", "lv2", "hv1", "lv2", "hv4", "lv4"]];

        var positions = [];
        for (var reelId = 0; reelId < reels.length; reelId++) {
            var pos = Math.floor(Math.random() * reels[reelId].length);
            positions.push(pos);
        }
        var screen = [[], [], [], [], []];
        for (var i = 0; i < 3; i++) {
            var rowMap = ' ';
            var column = 0;
            while (column < reels.length) {
                rowMap += (reels[column])[(positions[column] + i) % (reels[column].length)] + ' ';
                screen[column].push((reels[column])[(positions[column] + i) % (reels[column].length)]);
                column++;
            }
        }
        updatedReels = JSON.parse(JSON.stringify(screen));
    }

    testThis();
    return {
        updatedReels: updatedReels
    }
});