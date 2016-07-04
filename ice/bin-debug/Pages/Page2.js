/**
 *
 * @author
 *
 */
var Page2 = (function (_super) {
    __extends(Page2, _super);
    function Page2() {
        _super.call(this);
        this.skinName = "src/skins/Page2Skin.exml";
        for (var i = 6; i < this.numChildren; i++) {
            var item = this.getChildAt(i);
            item.alpha = 0;
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_1, this);
        //this.addArrawUP();
        this.addArrawDOWN();
        this.arraw_down.visible = false;
        this.img_point.alpha = 1;
        egret.Tween.get(this.img_point, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
    }
    var d = __define,c=Page2,p=c.prototype;
    p.onclick_1 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_1, this);
        this.arraw_down.visible = true;
        egret.Tween.get(this.img_2).to({ "alpha": 0 }, 1000);
        egret.Tween.get(this.img_1_1).to({ "alpha": 0.3 }, 1000);
        egret.Tween.get(this.img_3).to({ "alpha": 1 }, 1000)
            .wait(100).to({ "x": -250 }, 1000);
        egret.Tween.get(this.img_4)
            .to({ "alpha": 1 }, 1000)
            .wait(100).to({ "x": this.img_4.x + 190 }, 1000).call(this.addTOuch3, this);
        egret.Tween.get(this).wait(800).call(this.playSound, this);
        //this.gp_fish.alpha = 1;
        for (var i = 0; i < this.gp_fish.numChildren; i++) {
            var fish = this.gp_fish.getChildAt(i);
            fish.x = -200 - Math.random() * 300;
            egret.Tween.get(fish, { "loop": true }).to({ "x": 480, "scaleX": 0.5, "scaleY": 0.5 }, 4000 * Math.random() + 1000);
            egret.Tween.get(fish, { "loop": true })
                .to({ "anchorOffsetY": 100 }, 1500, egret.Ease.quadInOut)
                .to({ "anchorOffsetY": 0 }, 1500, egret.Ease.quadInOut);
        }
        this.img_point.visible = false;
        egret.Tween.removeTweens(this.img_point);
    };
    p.playSound = function () {
        Sound.getInstance().PlayHai();
    };
    p.addTOuch2 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_2, this);
        this.img_5.alpha = 0;
    };
    p.addTOuch3 = function () {
        //this.img_point0.visible = true; 
        this.img_point0.alpha = 1;
        egret.Tween.get(this.img_point, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_3, this);
    };
    p.addTOuch4 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_4, this);
    };
    p.addTOuch5 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_5, this);
    };
    p.addTOuch6 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_6, this);
    };
    p.addTOuch7 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_7, this);
    };
    p.onclick_2 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_2, this);
        egret.Tween.get(this.img_5)
            .to({ "alpha": 1 }, 1000)
            .call(this.addTOuch3, this);
    };
    p.onclick_3 = function (e) {
        var hittest = false;
        for (var i = 0; i < this.gp_fish.numChildren; i++) {
            var fish = this.gp_fish.getChildAt(i);
            var rect = new egret.Rectangle(fish.x, fish.y, fish.width, fish.height);
            if (rect.containsPoint(new egret.Point(e.stageX, e.stageY))) {
                hittest = true;
                break;
            }
        }
        if (!hittest) {
            return;
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_3, this);
        this.img_6.anchorOffsetY = 100;
        this.img_6.x = 106;
        this.img_6.y = 222 + this.img_6.anchorOffsetY;
        this.img_6.width = 76;
        this.img_6.height = 77;
        egret.Tween.get(this.img_6)
            .wait(500)
            .to({ "alpha": 1, "width": 178, "height": 179, "x": 218, "y": 190 }, 500)
            .to({ "alpha": 1, "anchorOffsetY": 0 }, 1500, egret.Ease.bounceOut);
        egret.Tween.get(this.img_7)
            .to({ "alpha": 1 }, 1000)
            .call(this.addTOuch4, this);
        egret.Tween.get(this.img_8)
            .wait(1000)
            .to({ "alpha": 1 }, 500)
            .call(this.onclick_4, this);
        Sound.getInstance().PauseHai();
    };
    p.onclick_4 = function () {
        var _this = this;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_4, this);
        egret.Tween.get(this.img_9_0)
            .to({ "alpha": 1 }, 1000);
        egret.setTimeout(function () {
            _this.img_9.anchorOffsetY = -100;
            egret.Tween.get(_this.img_9)
                .to({ "alpha": 1, "anchorOffsetY": 0 }, 1500, egret.Ease.cubicOut)
                .call(_this.addTOuch5, _this);
        }, this, 1000);
    };
    p.onclick_5 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_5, this);
        egret.Tween.get(this.img_10)
            .to({ "alpha": 1 }, 1000);
        this.img_11.anchorOffsetY = 100;
        egret.Tween.get(this.img_11)
            .to({ "alpha": 1, "anchorOffsetY": 0 }, 1500)
            .call(this.onclick_6, this);
    };
    p.onclick_6 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_6, this);
        egret.Tween.get(this.img_12)
            .to({ "alpha": 1 }, 1000);
        egret.Tween.get(this.img_13).wait(1000)
            .to({ "alpha": 1 }, 1000)
            .call(this.addTOuch7, this);
        this.img_14.anchorOffsetY = -20;
        egret.Tween.get(this.img_14).wait(1000)
            .to({ "alpha": 1, "anchorOffsetY": 0 }, 1000)
            .call(this.addTOuch7, this);
    };
    p.onclick_7 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_7, this);
        this.nextPage();
    };
    p.nextPage = function () {
        this.onclick_page_down();
    };
    p.onclick_page_down = function () {
        egret.Tween.removeAllTweens();
        this.removeAndAdd_Up(new Page3());
        Sound.getInstance().PauseHai();
    };
    p.onclick_page_up = function () {
        egret.Tween.removeAllTweens();
        Sound.getInstance().PauseHai();
        this.removeAndAdd_Dwon(new Page2());
    };
    return Page2;
}(BasePage));
egret.registerClass(Page2,'Page2');
