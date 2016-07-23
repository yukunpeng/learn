/**
 *
 * @author
 *
 */
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        _super.call(this);
        this.leftX = 120;
        this.rightX = 270;
        this.init();
    }
    var d = __define,c=Hero,p=c.prototype;
    p.init = function () {
        this.girl = McManager.getIns().getGirl();
        this.girl.x = 38;
        this.girl.y = 138;
        this.addChild(this.girl);
        this.girl.gotoAndPlay("stand", -1);
    };
    p.reset = function () {
        this.girl.visible = true;
        this.girl.gotoAndPlay("stand", -1);
        this.girl.gotoAndPlay("stand", -1);
    };
    p.stand = function () {
        this.girl.gotoAndPlay("stand", -1);
    };
    p.jump = function () {
        this.girl.gotoAndPlay("jump", 1);
        this.girl.addEventListener(egret.Event.COMPLETE, this.jumpOver, this);
    };
    p.die = function () {
        this.girl.visible = false;
    };
    p.jumpOver = function () {
        this.girl.removeEventListener(egret.Event.COMPLETE, this.jumpOver, this);
        this.girl.gotoAndPlay("stand", -1);
    };
    p.isAtLeft = function () {
        if (this.x == this.leftX) {
            return true;
        }
        return false;
    };
    p.toLeft = function () {
        this.x = this.leftX;
    };
    p.toRight = function () {
        this.x = this.rightX;
    };
    return Hero;
}(eui.Component));
egret.registerClass(Hero,'Hero');
