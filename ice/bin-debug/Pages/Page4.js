var Page4 = (function (_super) {
    __extends(Page4, _super);
    function Page4() {
        _super.call(this);
        this.skinName = "src/skins/Page4Skin.exml";
        var obj1 = this.group1.getChildAt(1);
        var obj2 = this.group1.getChildAt(2);
        var obj3 = this.group1.getChildAt(3);
        obj1.alpha = obj2.alpha = obj3.alpha = 0;
        obj1 = this.group2.getChildAt(1);
        obj2 = this.group2.getChildAt(2);
        obj3 = this.group2.getChildAt(3);
        obj1.alpha = obj2.alpha = obj3.alpha = 0;
        egret.Tween.get(this).wait(2000).call(this.begin, this);
        this.addArrawUP();
        this.addArrawDOWN();
        this.img_point1.visible = this.img_point2.visible = this.img_point3.visible = false;
        egret.Tween.get(this.img_point, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        egret.Tween.get(this.img_point1, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        egret.Tween.get(this.img_point2, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        egret.Tween.get(this.img_point3, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        this.arraw_down.visible = false;
    }
    var d = __define,c=Page4,p=c.prototype;
    p.begin = function () {
        egret.Tween.get(this.group1)
            .to({ "scaleX": 1.4, "scaleY": 1.4 }, 4000);
        var obj1 = this.group1.getChildAt(1);
        var obj2 = this.group1.getChildAt(2);
        var obj3 = this.group1.getChildAt(3);
        obj1.alpha = obj2.alpha = obj3.alpha = 0;
        egret.Tween.get(obj1).wait(2500)
            .to({ "alpha": 1 }, 2500);
        egret.Tween.get(obj2).wait(3000)
            .to({ "alpha": 1 }, 2000);
        egret.Tween.get(obj3).wait(3500)
            .to({ "alpha": 1 }, 1500).call(this.addTouch, this);
    };
    p.addTouch = function () {
        this.img_point1.visible = this.img_point2.visible = this.img_point3.visible = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_1, this);
    };
    p.onclick_1 = function () {
        this.img_point1.visible = this.img_point2.visible = this.img_point3.visible = false;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_1, this);
        var obj1 = this.group1.getChildAt(1);
        var obj2 = this.group1.getChildAt(2);
        var obj3 = this.group1.getChildAt(3);
        egret.Tween.get(obj1).wait(500)
            .to({ "alpha": 0 }, 1500);
        egret.Tween.get(obj2).wait(1000)
            .to({ "alpha": 0 }, 1000);
        egret.Tween.get(obj3).wait(1500)
            .to({ "alpha": 0 }, 500);
        var obj1 = this.group2.getChildAt(1);
        var obj2 = this.group2.getChildAt(2);
        var obj3 = this.group2.getChildAt(3);
        obj1.alpha = obj2.alpha = obj3.alpha = 0;
        egret.Tween.get(obj1).wait(500)
            .to({ "alpha": 1 }, 1500);
        egret.Tween.get(obj2).wait(1000)
            .to({ "alpha": 1 }, 1000);
        egret.Tween.get(obj3).wait(1500)
            .to({ "alpha": 1 }, 500).call(this.addTouch2, this);
    };
    p.addTouch2 = function () {
        egret.Tween.get(this.img_point4, { loop: true }).to({ "alpha": 1 }, 1000);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_2, this);
    };
    p.onclick_2 = function () {
        this.img_point4.visible = false;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_2, this);
        this.onclick_3();
        /*
        this.group3.scaleX = this.group3.scaleY = 3;
        this.group3.visible = true;
        this.group3.alpha = 0;
        egret.Tween.get(this.group3)
            .to({ "alpha": 1,"scaleX": 1,"scaleY": 1 },2000)
            .call(this.addTouch3,this);
        //
            */
    };
    p.addTouch3 = function () {
        this.group3.getChildAt(1).alpha = 0;
        egret.Tween.get(this.group3.getChildAt(1), { "loop": true })
            .to({ "alpha": 1 }, 1000);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_3, this);
        this.img_hand2.alpha = 0;
        this.img_screen.alpha = 0;
        this.img_text.alpha = 0;
        //        this.img_text_0.alpha = 0;
        this.img_text.anchorOffsetY = -20;
        this.img_hand1.anchorOffsetX = -200;
    };
    p.onclick_3 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_3, this);
        this.group4.visible = true;
        //        this.img_hand2.alpha = 0;
        //        egret.Tween.get(this.img_hand2)
        //            .to({ "alpha": 1 },1000);
        for (var i = 0; i < 2; i++) {
            var item = this.group4.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item).wait(2000 * i)
                .to({ "alpha": 1 }, 2000);
        }
        egret.Tween.get(this.img_hand1)
            .wait(4000).to({ "anchorOffsetX": 0 }, 1000)
            .call(this.showNext, this);
        this.arraw_down.visible = true;
    };
    p.showNext = function () {
        egret.Tween.get(this.img_hand2, { "loop": true })
            .to({ "alpha": 1 }, 2000)
            .wait(1000)
            .to({ "alpha": 0 }, 1000)
            .wait(1000);
        egret.Tween.get(this.img_screen, { "loop": true })
            .to({ "alpha": 1 }, 2000)
            .wait(1000)
            .to({ "alpha": 0 }, 1000)
            .wait(1000);
        //        egret.Tween.get(this.img_text_0).wait(1000)
        //.to({ "alpha": 1 },2000);
        egret.Tween.get(this.img_text).wait(2000)
            .to({ "anchorOffsetY": 0, "alpha": 1 }, 1000);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_4, this);
    };
    p.onclick_4 = function () {
        this.onclick_page_down();
    };
    p.onclick_page_down = function () {
        if (this.arraw_down.visible == false) {
            return;
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_4, this);
        egret.Tween.removeAllTweens();
        this.removeAndAdd_Up(new Page5());
    };
    p.onclick_page_up = function () {
        this.removeAndAdd_Dwon(new Page3());
    };
    return Page4;
}(BasePage));
egret.registerClass(Page4,'Page4');
