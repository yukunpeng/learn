/**
 *
 * @author
 *
 */
var Bg = (function (_super) {
    __extends(Bg, _super);
    function Bg() {
        _super.call(this);
        this.dis = 20;
    }
    var d = __define,c=Bg,p=c.prototype;
    p.init = function () {
        this.bg0 = this["bg0"];
        this.bg1 = this["bg1"];
    };
    p.step = function () {
        this.bg0.y -= this.dis;
        this.bg1.y -= this.dis;
        if (this.bg0.y + 800 < 0) {
            this.bg0.y = this.bg1.y + 800;
        }
        if (this.bg1.y + 800 < 0) {
            this.bg1.y = this.bg0.y + 800;
        }
    };
    return Bg;
}(eui.Component));
egret.registerClass(Bg,'Bg');
