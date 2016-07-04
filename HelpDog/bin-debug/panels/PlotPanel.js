/**
 *
 * @author
 *
 */
var PlotPanel = (function (_super) {
    __extends(PlotPanel, _super);
    function PlotPanel() {
        _super.call(this, "src/panels/PlotPanelSkin.exml");
        this.plot = RES.getRes("plot_json");
        this.pos = 0;
        this.updateView();
    }
    var d = __define,c=PlotPanel,p=c.prototype;
    p.onTouch = function (e) {
        switch (e.target) {
            case this["jumpTf"]:
                Main.ins.removeChild(this);
                Main.ins.addChild(RolePanel.getIns());
                break;
            default:
                this.pos++;
                if (this.pos >= this.plot.length) {
                    Main.ins.removeChild(this);
                    Main.ins.addChild(RolePanel.getIns());
                }
                else {
                    this.updateView();
                }
                break;
        }
    };
    p.updateView = function () {
        this["plotTf"].text = this.plot[this.pos];
    };
    PlotPanel.getIns = function () {
        if (!PlotPanel.ins) {
            PlotPanel.ins = new PlotPanel();
        }
        return PlotPanel.ins;
    };
    return PlotPanel;
}(PanelBase));
egret.registerClass(PlotPanel,'PlotPanel');
