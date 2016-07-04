/**
 *
 * @author
 *
 */
var PageShare = (function (_super) {
    __extends(PageShare, _super);
    function PageShare() {
        _super.call(this);
        this.skinName = "src/skins/PageShareSkin.exml";
        this.btn_more.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_more, this);
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_share, this);
        this.gp_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_close_share, this);
        for (var i = 0; i < this.gp_items.numChildren; i++) {
            var item = this.gp_items.getChildAt(i);
            item.alpha = 0;
        }
        egret.Tween.get(this).wait(1000).call(this.begin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_stop, this);
        this.addArrawUP();
    }
    var d = __define,c=PageShare,p=c.prototype;
    p.begin = function () {
        for (var i = 0; i < this.gp_items.numChildren; i++) {
            var item = this.gp_items.getChildAt(i);
            egret.Tween.get(item).wait(i * 1500)
                .to({ "alpha": 1 }, 1000);
        }
    };
    p.onclick_stop = function () {
        //egret.Tween.removeAllTweens();
        for (var i = 0; i < this.gp_items.numChildren; i++) {
            var item = this.gp_items.getChildAt(i);
            egret.Tween.removeTweens(item);
            item.alpha = 1;
        }
    };
    p.onclick_more = function () {
        //点击更多
        console.log("on click more!");
        //http://support-cn.samsung.com/campaign/Ref/familyhub/
        self.location.href = "http://support-cn.samsung.com/campaign/Ref/familyhub/";
    };
    p.onclick_close_share = function () {
        this.gp_share.visible = false;
    };
    p.onclick_share = function () {
        this.gp_share.visible = true;
    };
    p.onclick_page_up = function () {
        this.removeAndAdd_Dwon(new Page5());
    };
    return PageShare;
}(BasePage));
egret.registerClass(PageShare,'PageShare');
