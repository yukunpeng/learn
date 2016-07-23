/**
 *
 * @author
 *
 */
var SharePanel = (function (_super) {
    __extends(SharePanel, _super);
    function SharePanel() {
        _super.call(this, "src/panels/SharePanelSkin.exml");
    }
    var d = __define,c=SharePanel,p=c.prototype;
    p.onTouch = function (e) {
        SoundManager.playBegin();
        Main.ins.removeChild(this);
    };
    SharePanel.getIns = function () {
        if (!SharePanel.ins) {
            SharePanel.ins = new SharePanel();
        }
        return SharePanel.ins;
    };
    return SharePanel;
}(PanelBase));
egret.registerClass(SharePanel,'SharePanel');
