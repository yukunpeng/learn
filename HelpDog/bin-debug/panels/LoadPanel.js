/**
 *
 * @author
 *
 */
var LoadPanel = (function (_super) {
    __extends(LoadPanel, _super);
    function LoadPanel() {
        _super.call(this, "src/panels/LoadPanelSkin.exml");
    }
    var d = __define,c=LoadPanel,p=c.prototype;
    LoadPanel.getIns = function () {
        if (!LoadPanel.ins) {
            LoadPanel.ins = new LoadPanel();
        }
        return LoadPanel.ins;
    };
    return LoadPanel;
}(PanelBase));
egret.registerClass(LoadPanel,'LoadPanel');
