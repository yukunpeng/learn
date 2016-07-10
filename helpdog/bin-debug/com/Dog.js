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
        this.tipArr = []; //提示
        var wl = ""; //文理
        var _y; //提示坐标
        switch (type) {
            case "jie":
                this.mc = McManager.getJie();
                _y = -120;
                wl = "jiefood_png";
                break;
            case "shengbing":
                this.mc = McManager.getShengbing();
                _y = -120;
                wl = "shengbingfood_png";
                break;
            case "diaomao":
                this.mc = McManager.getDiaomao();
                _y = -160;
                wl = "diaomaofood_png";
                break;
        }
        this.addChild(this.mc);
        for (var i = 0; i < 3; i++) {
            var img = new eui.Image(RES.getRes(wl));
            img.y = _y;
            img.x = i * 25;
            this.tipArr.push(img);
            this.addChild(img);
        }
    }
    var d = __define,c=Dog,p=c.prototype;
    //打击dog
    p.hit = function () {
        this.tipArr[this.hungry - 1].visible = false;
        this.hungry--;
    };
    p.reset = function () {
        this.hungry = 3;
        for (var i = 0; i < 3; i++) {
            this.tipArr[i].visible = true;
        }
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
