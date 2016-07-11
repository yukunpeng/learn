/**
 *
 * @author
 *
 */
var WaterPanel = (function (_super) {
    __extends(WaterPanel, _super);
    function WaterPanel() {
        _super.call(this, "src/panels/WaterPanelSkin.exml");
        this.touchEnabled = false;
        this.touchChildren = false;
    }
    var d = __define,c=WaterPanel,p=c.prototype;
    WaterPanel.getIns = function () {
        if (!WaterPanel.ins) {
            WaterPanel.ins = new WaterPanel();
        }
        return WaterPanel.ins;
    };
    return WaterPanel;
}(PanelBase));
egret.registerClass(WaterPanel,'WaterPanel');
