/**
 *
 * @author
 *
 */
var Page6 = (function (_super) {
    __extends(Page6, _super);
    function Page6() {
        _super.call(this);
        this.tween1_pause = false;
        this.tween2_pause = true;
        this.tween3_pause = true;
        this._savetouchy = 0;
        this.skinName = "src/skins/Page6Skin.exml";
        this.img_text.source = null;
        for (var i = 0; i < this.gp_point.numChildren; i++) {
            this.gp_point.getChildAt(i).alpha = 0;
        }
        for (var i = 0; i < this.group_arraw.numChildren; i++) {
            var item = this.group_arraw.getChildAt(i);
            egret.Tween.get(item, { "loop": true })
                .wait(i * 500).to({ "alpha": 0 }, 1500)
                .to({ "alpha": 1 }, 1000)
                .wait((this.group_arraw.numChildren - i - 1) * 500);
        }
        this.group_arraw.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextPage, this);
        egret.Tween.get(this).wait(1000).call(this.begin, this);
        //        this.gp_point.getChildAt(1).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch5,this);
        //        this.gp_point.getChildAt(2).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch4,this);
        //this.gp_point.getChildAt(3).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch2,this);
        this.tween1_pause = true;
        this.tween2_pause = false;
        this.gp_point.getChildAt(1).addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch4, this);
        this.gp_point.getChildAt(2).addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch2, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouch_begin2, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.ontouch_end2, this);
        this.showScale();
        this.addArrawUP();
    }
    var d = __define,c=Page6,p=c.prototype;
    p.begin = function () {
        for (var i = 0; i < this.gp_point.numChildren; i++) {
            var item = this.gp_point.getChildAt(i);
            egret.Tween.get(item).wait(i * 1000)
                .to({ "alpha": 1 }, 1000);
        }
        egret.Tween.get(this).wait(1000 * this.gp_point.numChildren);
        this.gp_2.getChildAt(1).alpha = 0;
        this.gp_2.getChildAt(2).alpha = 0;
        egret.Tween.get(this.gp_3.getChildAt(1), { "loop": true })
            .to({ "alpha": 1 }, 200)
            .wait(500)
            .to({ "alpha": 0 }, 200);
    };
    p.showScale = function () {
        for (var i = 0; i < this.gp_point.numChildren; i++) {
            var item = this.gp_point.getChildAt(i);
            item.x += 41 / 2;
            item.y += 41 / 2;
            item.anchorOffsetX = 41 / 2;
            item.anchorOffsetY = 41 / 2;
        }
        this.tween1 = egret.Tween.get(this.gp_point.getChildAt(1), { "loop": true })
            .to({ "scaleX": 1.4, "scaleY": 1.4 }, 1000)
            .wait(500)
            .to({ "scaleX": 1, "scaleY": 1 }, 500);
    };
    p.hideAll = function () {
        this.gp_1.visible = false;
        this.gp_2.visible = false;
        this.gp_3.visible = false;
        //this.group_arraw.visible = true;
    };
    p.ontouch2 = function (e) {
        if (this.tween3_pause) {
            return;
        }
        this.tween3.pause();
        this.tween3_pause = true;
        //this.tween2.play();
        //this.tween2_pause = false;
        this.group_arraw.visible = true;
        e.currentTarget.scaleX = e.currentTarget.scaleY = 1;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch2, this);
        this.gp_1.visible = true;
        this.gp_1.alpha = 0;
        this.gp_1.scaleX = this.gp_1.scaleY = 0;
        this.gp_1.x = 288;
        this.gp_1.y = 92;
        egret.Tween.get(this.gp_1)
            .to({ "alpha": 1, "scaleX": 1, "scaleY": 1, "x": 0, "y": 0 }, 1000)
            .call(this.ontouch3, this)
            .wait(9000).to({ "alpha": 0 }, 1000).call(this.hideAll, this);
        this.img_hand.alpha = 0;
        this.img_hand.x = 400;
    };
    p.huangdong = function () {
        var ox = Math.random() * 10 + 20;
        var oy = Math.random() * 10 + 30;
        egret.Tween.get(this.img_hand).wait(500)
            .to({ "anchorOffsetX": ox, "anchorOffsetY": oy }, 500 / 2)
            .to({ "anchorOffsetX": -ox, "anchorOffsetY": -oy }, 500 / 2)
            .to({ "anchorOffsetX": 0, "anchorOffsetY": 0 }, 500 / 2);
    };
    p.ontouch3 = function () {
        //this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch3,this);
        egret.Tween.get(this.img_hand)
            .to({ "alpha": 1, "x": 128, "y": 151, }, 1000)
            .call(this.huangdong, this)
            .wait(1000)
            .to({ "x": 282, "y": 323 }, 1000)
            .to({ "x": 128, "y": 247 }, 500)
            .call(this.huangdong, this)
            .to({ "x": 282, "y": 460 }, 1000)
            .to({ "x": 128, "y": 383 }, 500)
            .call(this.huangdong, this)
            .to({ "x": 339, "y": 450 }, 1000);
        egret.Tween.get(this.img_text)
            .wait(2000)
            .set({ "source": RES.getRes("p5_8_0_png") })
            .wait(1500)
            .set({ "source": RES.getRes("p5_8_3_png") })
            .wait(1500)
            .set({ "source": RES.getRes("p5_8_6_png") });
    };
    p.ontouch4 = function (e) {
        if (this.tween2_pause) {
            return;
        }
        this.tween1.pause();
        this.tween2_pause = true;
        this.tween3_pause = false;
        e.currentTarget.scaleX = e.currentTarget.scaleY = 1;
        this.tween3 = egret.Tween.get(this.gp_point.getChildAt(2), { "loop": true })
            .to({ "scaleX": 1.4, "scaleY": 1.4 }, 1000)
            .wait(500)
            .to({ "scaleX": 1, "scaleY": 1 }, 500);
        this.gp_2.visible = true;
        this.gp_2.alpha = 0;
        egret.Tween.get(this.gp_2)
            .to({ "alpha": 1 }, 1000).call(this.begincloud, this)
            .wait(3000).to({ "alpha": 0 }, 1000).call(this.hideAll, this);
    };
    p.begincloud = function () {
        egret.Tween.get(this.gp_2.getChildAt(1), { "loop": true })
            .to({ "alpha": 1 }, 1000)
            .wait(1000)
            .to({ "alpha": 0 }, 1000)
            .wait(6000);
        egret.Tween.get(this.gp_2.getChildAt(1), { "loop": true })
            .wait(3000)
            .to({ "alpha": 1 }, 1000)
            .wait(1000)
            .to({ "alpha": 0 }, 1000); //.wait(3000);
    };
    p.ontouch5 = function (e) {
        if (this.tween1_pause) {
            return;
        }
        this.tween1.pause();
        this.tween1_pause = true;
        this.tween2_pause = false;
        e.currentTarget.scaleX = e.currentTarget.scaleY = 1;
        this.tween2 = egret.Tween.get(this.gp_point.getChildAt(2), { "loop": true })
            .to({ "scaleX": 1.4, "scaleY": 1.4 }, 1000)
            .wait(500)
            .to({ "scaleX": 1, "scaleY": 1 }, 500);
        this.gp_3.visible = true;
        this.gp_3.alpha = 0;
        egret.Tween.get(this.gp_3)
            .to({ "alpha": 1 }, 1000)
            .wait(3000).to({ "alpha": 0 }, 1000).call(this.hideAll, this);
    };
    p.nextPage = function () {
        egret.Tween.removeAllTweens();
        this.removeAndAdd_Up(new PageShare());
    };
    p.ontouch_begin2 = function (e) {
        this._savetouchy = e.stageY;
    };
    p.ontouch_end2 = function (e) {
        if (this._savetouchy - e.stageY > 70) {
            this.nextPage();
            return;
        }
    };
    p.onclick_page_up = function () {
        this.removeAndAdd_Dwon(new Page5());
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouch_begin2, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.ontouch_end2, this);
        this.gp_point.getChildAt(1).removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch5, this);
        this.gp_point.getChildAt(2).removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch4, this);
        this.gp_point.getChildAt(3).removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontouch2, this);
    };
    return Page6;
}(BasePage));
egret.registerClass(Page6,'Page6');
