/**
 *
 * @author
 *
 */
var LoadPanel = (function (_super) {
    __extends(LoadPanel, _super);
    function LoadPanel() {
        _super.call(this, "src/panels/LoadPanelSkin.exml");
        this["proTxt"].text = "0%";
    }
    var d = __define,c=LoadPanel,p=c.prototype;
    p.setPro = function (cur, total) {
        if (!this["proTxt"]) {
            return;
        }
        var per = cur / total;
        this["pro"].width = this["bg"].width * per;
        this["proTxt"].text = Math.floor(per * 100) + "%";
    };
    LoadPanel.getIns = function () {
        if (!LoadPanel.ins) {
            LoadPanel.ins = new LoadPanel();
        }
        return LoadPanel.ins;
    };
    return LoadPanel;
}(PanelBase));
egret.registerClass(LoadPanel,'LoadPanel');
