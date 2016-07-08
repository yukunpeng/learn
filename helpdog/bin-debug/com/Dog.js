/**
 *
 * @author
 *
 */
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(type) {
        _super.call(this);
        this.type = type;
        switch (type) {
            case "jie":
                this.mc = McManager.getJie();
                break;
            case "shengbing":
                this.mc = McManager.getShengbing();
                break;
            case "diaomao":
                this.mc = McManager.getDiaomao();
                break;
        }
        this.addChild(this.mc);
    }
    var d = __define,c=Dog,p=c.prototype;
    p.reset = function () {
        this.hungry = 3;
    };
    p.run = function () {
        this.mc.gotoAndPlay("run", -1);
    };
    p.sit = function () {
        this.mc.scaleX = 1;
        this.mc.gotoAndPlay("sit", -1);
    };
    p.toRight = function () {
        this.mc.scaleX = 1;
    };
    p.toLeft = function () {
        this.mc.scaleX = -1;
    };
    return Dog;
}(egret.Sprite));
egret.registerClass(Dog,'Dog');
