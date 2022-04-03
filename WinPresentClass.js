var WinPresentClass = /** @class */ (function (screen) {
    var totalWin = 0;
    var winCombinations = [];

    function main(screen) {
        var payLines = [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2],
            [0, 0, 1, 2, 2],
            [2, 2, 1, 0, 0],
            [0, 1, 2, 1, 0],
            [2, 1, 0, 1, 2]
        ];

        var payOuts = {
            'hv1': {3: 1, 4: 2, 5: 3},
            'hv2': {3: 1, 4: 2, 5: 3},
            'hv3': {3: 1, 4: 2, 5: 5},
            'hv4': {3: 2, 4: 5, 5: 10},
            'lv1': {3: 5, 4: 10, 5: 15},
            'lv2': {3: 5, 4: 10, 5: 15},
            'lv3': {3: 5, 4: 10, 5: 20},
            'lv4': {3: 10, 4: 20, 5: 50}
        };


        for (var i = 0; i < payLines.length; i++) {
            var reelIndex = 0;
            var startSymbol = null;
            var count = 0;

            while (reelIndex < screen.length) {
                var symbol = screen[reelIndex][payLines[i][reelIndex]];
                startSymbol = startSymbol || symbol;

                if (symbol === startSymbol) {
                    count++;
                } else {
                    break;
                }
                reelIndex++;
            }
            var payoutLine = {
                'sym': startSymbol,
                'count': count,
                'payline': i + 1
            };

            if (payOuts[payoutLine['sym']][payoutLine['count']]) {
                payoutLine.multiplier = payOuts[payoutLine['sym']][payoutLine['count']];
                totalWin += payoutLine.multiplier;
                winCombinations.push(payoutLine);
            }
        }
    }

    main(screen);
    return {
        totalWin: totalWin,
        winCombinations: winCombinations
    }
});