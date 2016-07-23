/**
 *
 * @author
 *
 */
var Pro = (function (_super) {
    __extends(Pro, _super);
    function Pro() {
        _super.call(this);
    }
    var d = __define,c=Pro,p=c.prototype;
    /**
     * 为倒计时加时间
     */
    p.add = function (dis) {
        //清除tween
        egret.Tween.removeTweens(this.rect);
        var scaleY = this.rect.scaleY + dis;
        if (scaleY > 1) {
            scaleY = 1;
        }
        var time = scaleY * GameData.getIns().getTotalTime() * 1000;
        this.rect.scaleY = scaleY;
        egret.Tween.get(this.rect).to({ scaleY: 0 }, time).call(this.timeOver, this);
    };
    /**
     * 重置倒计时
     */
    p.reset = function () {
        this.rect.scaleY = 0.5;
        var time = this.rect.scaleY * GameData.getIns().getTotalTime() * 1000;
        egret.Tween.get(this.rect).to({ scaleY: 0 }, time).call(this.timeOver, this);
    };
    /**
     * 倒计时暂停
     */
    p.stop = function () {
        egret.Tween.removeTweens(this.rect);
    };
    p.init = function () {
        this.rect = this["rect"];
        this.rect.anchorOffsetY = 132;
        this.rect.y = 140;
    };
    p.timeOver = function () {
        this.dispatchEventWith("timeOver");
    };
    return Pro;
}(eui.Component));
egret.registerClass(Pro,'Pro');
