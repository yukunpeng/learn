/**
 *
 * @author
 *
 */
var PanelBase = (function (_super) {
    __extends(PanelBase, _super);
    function PanelBase(skinName) {
        _super.call(this);
        this.skinName = skinName;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }
    var d = __define,c=PanelBase,p=c.prototype;
    p.onTouch = function (e) {
    };
    return PanelBase;
}(eui.Component));
egret.registerClass(PanelBase,'PanelBase');
//# sourceMappingURL=PanelBase.js.map