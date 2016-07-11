/**
 *
 * @author
 *
 */
var Man = (function (_super) {
    __extends(Man, _super);
    function Man(type) {
        _super.call(this);
        switch (type) {
            case "boy":
                this.mc = McManager.getBoy();
                break;
            case "girl":
                this.mc = McManager.getGirl();
                break;
        }
        this.addChild(this.mc);
        this.mc.addEventListener(egret.Event.COMPLETE, this.mcOver, this);
    }
    var d = __define,c=Man,p=c.prototype;
    //扔狗粮
    p.plit = function () {
        this.mc.gotoAndPlay("plit", 1);
    };
    p.mcOver = function () {
        this.mc.gotoAndStop(1);
    };
    return Man;
}(egret.Sprite));
egret.registerClass(Man,'Man');
//# sourceMappingURL=Man.js.map