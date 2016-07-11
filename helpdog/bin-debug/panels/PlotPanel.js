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
        egret.Tween.get(this["preBtn"], { "loop": true })
            .to({ "scaleX": 0.9, "scaleY": 0.9 }, 500)
            .to({ "scaleX": 1, "scaleY": 1 }, 500);
    }
    var d = __define,c=PlotPanel,p=c.prototype;
    p.onTouch = function (e) {
        SoundManager.playBegin();
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
                egret.Tween.get(this["plotGroup"]).to({ "x": -this.pos * 640 }, 300);
                break;
            default:
                this.pos++;
                if (this.pos == this.plotArr.length) {
                    Main.ins.removeChild(this);
                    Main.ins.addChild(RolePanel.getIns());
                }
                else {
                    egret.Tween.get(this["plotGroup"]).to({ "x": -this.pos * 640 }, 300);
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
//# sourceMappingURL=PlotPanel.js.map