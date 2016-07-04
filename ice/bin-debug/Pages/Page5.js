var Page5 = (function (_super) {
    __extends(Page5, _super);
    function Page5() {
        _super.call(this);
        this.skinName = "src/skins/Page5Skin.exml";
        this.img_point.alpha = 0.5;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch2, this);
        egret.startTick(this.onupdate, this);
        this.addArrawUP();
        this.addArrawDOWN();
        //this.img_progress.SetProgress(0.1293);
        egret.Tween.get(this.img_point, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
    }
    var d = __define,c=Page5,p=c.prototype;
    p.onupdate = function () {
        var p = Sound.getInstance().getGudianPoint();
        //console.log(p);
        this.img_progress.SetProgress(p);
        return false;
    };
    p.ontouch2 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch2, this);
        this.img_point.visible = false;
        egret.Tween.get(this.img_1).to({ "rotation": 0 }, 1000);
        egret.Tween.get(this.img_2).wait(1000).to({ "alpha": 1 }, 1000).call(this.addTouch3, this);
    };
    p.addTouch3 = function () {
        this.img_point.visible = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch3, this);
        this.img_control.source = RES.getRes("p4_10_1_png");
        Sound.getInstance().PauseBGM();
        Sound.getInstance().PlayGudian();
    };
    p.ontouch3 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch3, this);
        this.gp_gudian.visible = true;
        this.gp_gudian.alpha = 0;
        this.img_left.alpha = 0;
        this.img_right.alpha = 0;
        this.img_left.x -= 50;
        this.img_right.x += 50;
        this.arraw_down.visible = false;
        egret.Tween.get(this.gp_gudian).to({ "alpha": 1 }, 1000).call(this.addTouch4, this);
        egret.Tween.get(this.img_left).to({ "x": this.img_left.x + 50, "alpha": 1 }, 1000);
        egret.Tween.get(this.img_right).to({ "x": this.img_right.x - 50, "alpha": 1 }, 1000);
    };
    p.addTouch4 = function () {
        this.img_point.visible = false;
        egret.Tween.removeTweens(this.img_point);
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch4,this);
        var x = this.img_left.x;
        egret.Tween.get(this.img_left, { "loop": true })
            .to({ "x": x - 20, "rotation": -5 }, 2000)
            .to({ "x": x, "rotation": 0 }, 2000);
        x = this.img_right.x;
        egret.Tween.get(this.img_right, { "loop": true })
            .to({ "x": x + 20, "rotation": 5 }, 2000)
            .to({ "x": x, "rotation": 0 }, 2000);
        egret.Tween.get(this).wait(3000).call(this.ontouch4, this);
    };
    p.ontouch4 = function () {
        this.arraw_down.visible = true;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch4, this);
        egret.Tween.removeTweens(this.img_left);
        egret.Tween.removeTweens(this.img_right);
        this.gp_player.visible = true;
        this.gp_player.alpha = 0;
        this.img_text.alpha = 0;
        this.img_text_1.alpha = 0;
        this.img_hand.alpha = 0;
        this.img_hand.anchorOffsetX = -100;
        egret.Tween.get(this.gp_player).to({ "alpha": 1 }, 1000)
            .wait(1000)
            .call(this.addTouch5, this);
    };
    p.addTouch5 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch5, this);
        egret.Tween.get(this.img_hand).to({ "anchorOffsetX": 0, "alpha": 1 }, 1000);
        egret.Tween.get(this.img_text).wait(1000).to({ "anchorOffsetX": 0, "alpha": 1 }, 1000);
        egret.Tween.get(this.img_text_1).wait(2500).to({ "alpha": 1 }, 1000);
    };
    p.ontouch5 = function () {
        this.onclick_page_down();
    };
    p.onclick_page_down = function () {
        if (this.arraw_down.visible == false) {
            return;
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch5, this);
        Sound.getInstance().PlayBGM();
        Sound.getInstance().PauseGudian();
        egret.stopTick(this.onupdate, this);
        this.removeAndAdd_Up(new Page6());
    };
    p.onclick_page_up = function () {
        Sound.getInstance().PlayBGM();
        Sound.getInstance().PauseGudian();
        this.removeAndAdd_Dwon(new Page4());
    };
    return Page5;
}(BasePage));
egret.registerClass(Page5,'Page5');
