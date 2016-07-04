/**
 *
 * @author
 *
 */
var Page1 = (function (_super) {
    __extends(Page1, _super);
    function Page1() {
        _super.call(this);
        this.skinName = "src/skins/Page1Skin.exml";
        for (var i = 1; i < this.numChildren; i++) {
            this.getChildAt(i).alpha = 0;
        }
        egret.Tween.get(this.img_1).to({ "alpha": 1 }, 2000);
        //egret.Tween.get(this.img_2).wait(2000).to({ "alpha": 1 },2000);
        //this.img_3.anchorOffsetX = this.img_3.width / 2;
        //this.img_3.anchorOffsetY = this.img_3.height; 
        //this.img_3.anchorOffsetX = 0.5;
        //this.img_3.anchorOffsetY = 0.5; 
        //this.img_3.x = this.img_3.x+this.img_3.width / 2;
        //this.img_3.y = this.img_3.y+this.img_3.height;
        egret.Tween.get(this.img_3).wait(2000).to({ "alpha": 1 }, 2000).to({ "alpha": 0 }, 2000);
        egret.Tween.get(this.img_4).wait(4000).to({ "alpha": 1 }, 2000).to({ "alpha": 0 }, 2000);
        egret.Tween.get(this.img_5).wait(6000).to({ "alpha": 1 }, 2000).call(this.onclick_touch0, this);
        this.img_hand.alpha = 0;
        this.img_hand.anchorOffsetX = -100;
        this.img_2.alpha = 1;
        this.img_2a.alpha = 1;
        var span = 8000 / (this.img_2.numChildren + this.img_2a.numChildren);
        for (var i = 0; i < this.img_2.numChildren; i++) {
            var item = this.img_2.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item).wait(4000).wait(300 * i).to({ "alpha": 1 }, span);
        }
        for (var i = 0; i < this.img_2a.numChildren; i++) {
            var item = this.img_2a.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item).wait(4000 + this.img_2.numChildren * 300).wait(300 * i).to({ "alpha": 1 }, span);
        }
        this.addArrawDOWN();
        this.arraw_down.visible = false;
        egret.Tween.get(this.img_point, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        egret.Tween.get(this.img_point0, { "loop": true }).to({ "alpha": 1 }, 500).wait(500).to({ "alpha": 0.5 }, 1500);
        this.img_point0.visible = false;
    }
    var d = __define,c=Page1,p=c.prototype;
    p.onclick_touch0 = function () {
        this.img_point0.visible = true;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch0, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch1, this);
        egret.Tween.get(this.img_5, { "loop": true }).to({ "scaleX": 1.025, "scaleY": 1.025 }, 1000).to({ "scaleX": 1, "scaleY": 1 }, 1000);
    };
    p.onclick_touch1 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch1, this);
        this.img_point0.x = 350;
        this.img_point0.y = 110;
        this.img_point0.alpha = 0;
        //显示新加的冰箱页面
        egret.Tween.get(this["jesus_3"]).to({ "alpha": 1 }, 1000);
        egret.Tween.get(this.img_point0).to({ "alpha": 1 }, 1000);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jesus_touch, this);
    };
    p.jesus_touch = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.jesus_touch, this);
        egret.Tween.get(this["jesus_3"]).to({ "alpha": 0 }, 1000);
        egret.Tween.removeTweens(this.img_5);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch1, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch2, this);
        this.group1.alpha = 1;
        this.group1.anchorOffsetY = -800;
        egret.Tween.get(this.group1).to({ "anchorOffsetY": 0 }, 1000, egret.Ease.cubicOut);
        egret.Tween.get(this.img_hand).to({ "alpha": 1, "anchorOffsetX": 0 }, 2000);
    };
    p.onclick_touch2 = function () {
        this.img_point.visible = false;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch2, this);
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_touch3,this);
        //        this.gp_loading.visible = true;
        //        egret.Tween.get(this.img_loading)
        //            .wait(500).set({ "source": RES.getRes("p1_8_1_jpg") })
        //            .wait(500).set({ "source": RES.getRes("p1_8_2_jpg") })
        //            .wait(500).set({ "source": RES.getRes("p1_8_3_jpg") })
        //            .wait(500).set({ "source": RES.getRes("p1_8_4_jpg") })
        //            .call(this.onclick_touch3,this);
        this.onclick_touch3();
    };
    p.onclick_touch3 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch3, this);
        egret.Tween.removeTweens(this.img_loading);
        this.img_panel.visible = true;
        this.img_panel.alpha = 0;
        egret.Tween.get(this.img_panel).to({ "alpha": 1 }, 1000).call(this.onclick_touch4, this);
        this.arraw_down.visible = true;
    };
    p.addTouch4 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch4, this);
    };
    p.onclick_touch4 = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_touch4, this);
        this.img_mask.visible = this.img_text.visible = true;
        this.img_mask.alpha = this.img_text.alpha = 0;
        this.img_text.anchorOffsetY = -20;
        egret.Tween.get(this.img_mask).to({ "alpha": 1 }, 1000);
        egret.Tween.get(this.img_text).wait(500).to({ "alpha": 1, "anchorOffsetY": 0 }, 1000).call(this.addTouch5, this);
    };
    p.addTouch5 = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch5, this);
    };
    p.ontouch5 = function () {
        this.onclick_page_down();
    };
    p.onclick_page_down = function () {
        if (this.arraw_down.visible) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch5, this);
            this.removeAndAdd_Up(new Page4());
        }
    };
    return Page1;
}(BasePage));
egret.registerClass(Page1,'Page1');
