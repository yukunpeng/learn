/**
 *
 * @author
 *
 */
var PlotPanel = (function (_super) {
    __extends(PlotPanel, _super);
    function PlotPanel() {
        _super.call(this, "src/panels/PlotPanelSkin.exml");
        this.plotArr = ["plot1_jpg", "plot2_jpg", "plot3_jpg"];
        this.pos = 0;
    }
    var d = __define,c=PlotPanel,p=c.prototype;
    p.onTouch = function (e) {
        switch (e.target) {
            case this["jumpBtn"]:
                Main.ins.removeChild(this);
                Main.ins.addChild(RolePanel.getIns());
                break;
            case this["preBtn"]:
                this.pos--;
                if (this.pos == -1) {
                    this.pos = 0;
                }
                this["plotPic"].texture = RES.getRes(this.plotArr[this.pos]);
                break;
            default:
                this.pos++;
                if (this.pos == this.plotArr.length) {
                    Main.ins.removeChild(this);
                    Main.ins.addChild(RolePanel.getIns());
                }
                else {
                    this["plotPic"].texture = RES.getRes(this.plotArr[this.pos]);
                }
                break;
        }
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
