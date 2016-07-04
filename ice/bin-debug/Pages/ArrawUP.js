var ArrawUP = (function (_super) {
    __extends(ArrawUP, _super);
    function ArrawUP() {
        _super.call(this);
        this.skinName = "src/skins/ArrawUPSkin.exml";
        this.init();
    }
    var d = __define,c=ArrawUP,p=c.prototype;
    p.init = function () {
        for (var i = this.group_arraw.numChildren - 1; i >= 0; i--) {
            var item = this.group_arraw.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item, { "loop": true })
                .wait((this.group_arraw.numChildren - i - 1) * 500).to({ "alpha": 1 }, 1500)
                .to({ "alpha": 0 }, 1000)
                .wait((i) * 500);
        }
    };
    return ArrawUP;
}(eui.Component));
egret.registerClass(ArrawUP,'ArrawUP');
var ArrawDOWN = (function (_super) {
    __extends(ArrawDOWN, _super);
    function ArrawDOWN() {
        _super.call(this);
    }
    var d = __define,c=ArrawDOWN,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < this.group_arraw.numChildren; i++) {
            var item = this.group_arraw.getChildAt(i);
            item.source = RES.getRes("arraw2_png");
            egret.Tween.get(item, { "loop": true })
                .wait(i * 500).to({ "alpha": 0 }, 1500)
                .to({ "alpha": 1 }, 1000)
                .wait((this.group_arraw.numChildren - i - 1) * 500);
        }
    };
    return ArrawDOWN;
}(ArrawUP));
egret.registerClass(ArrawDOWN,'ArrawDOWN');
