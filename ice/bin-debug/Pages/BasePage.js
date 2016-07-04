var BasePage = (function (_super) {
    __extends(BasePage, _super);
    function BasePage() {
        _super.call(this);
        this.ay = 0;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouch_begin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.ontouch_move, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.ontouch_end, this);
    }
    var d = __define,c=BasePage,p=c.prototype;
    p.AniFromUp = function () {
        this.anchorOffsetY = 800;
        egret.Tween.get(this).to({ "anchorOffsetY": 0 }, 1000, egret.Ease.quadOut);
    };
    p.AniFromDown = function () {
        this.anchorOffsetY = -800;
        egret.Tween.get(this).to({ "anchorOffsetY": 0 }, 1000, egret.Ease.quadOut);
    };
    p.AniToUp = function () {
        egret.Tween.get(this).to({ "anchorOffsetY": 800 }, 1000, egret.Ease.quadOut);
    };
    p.AniToDown = function () {
        egret.Tween.get(this).to({ "anchorOffsetY": -800 }, 1000, egret.Ease.quadOut);
    };
    p.removeAndAdd_Up = function (page) {
        this.AniToUp();
        page.AniFromDown();
        this.parent.addChild(page);
        egret.Tween.get(this).wait(1000).call(this.removethis, this);
    };
    p.removeAndAdd_Dwon = function (page) {
        this.AniToDown();
        page.AniFromUp();
        this.parent.addChild(page);
        egret.Tween.get(this).wait(1000).call(this.removethis, this);
    };
    p.removethis = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ontouch_begin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.ontouch_move, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.ontouch_end, this);
        if (this.arraw_up != null) {
            this.arraw_up.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_page_up, this);
        }
        if (this.arraw_down != null) {
            this.arraw_down.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_page_down, this);
        }
        if (this.parent && this) {
            this.parent.removeChild(this);
        }
    };
    p.addArrawUP = function () {
        this.arraw_up = new ArrawUP();
        this.arraw_up.x = 223;
        this.arraw_up.y = 26;
        this.addChild(this.arraw_up);
        this.arraw_up.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_page_up, this);
    };
    p.addArrawDOWN = function () {
        this.arraw_down = new ArrawDOWN();
        this.arraw_down.x = 223;
        this.arraw_down.y = 722;
        this.addChild(this.arraw_down);
        this.arraw_down.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_page_down, this);
    };
    p.onclick_page_up = function () {
    };
    p.onclick_page_down = function () {
    };
    p.ontouch_begin = function (e) {
        this.ay = e.stageY;
    };
    p.ontouch_move = function (e) {
    };
    p.ontouch_end = function (e) {
        if (e.stageY - this.ay > 70) {
            this.onclick_page_up();
        }
        if (e.stageY - this.ay < -70) {
            if (this.arraw_down == null) {
                return;
            }
            this.onclick_page_down();
        }
    };
    return BasePage;
}(eui.Component));
egret.registerClass(BasePage,'BasePage');
