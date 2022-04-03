var Symbol = /** @class */ (function (texture) {
    var syms = ["hv1", "hv2", "hv3", "hv4", "lv1", "lv2", "lv3", "lv4"];
    if (syms.indexOf(texture) > -1) {
        var sprite = new PIXI.Sprite(loader.resources[texture].texture);
        sprite.width = sprite.width / 2;
        sprite.height = sprite.height / 2;
        return sprite;
    }
});