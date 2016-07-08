/**
 *
 * @author
 *
 */
var ResultPanel = (function (_super) {
    __extends(ResultPanel, _super);
    function ResultPanel() {
        _super.call(this, "src/panels/ResultPanelSkin.exml");
        this.winTime = 9;
    }
    var d = __define,c=ResultPanel,p=c.prototype;
    p.resetPanel = function (usedTime) {
        console.log(usedTime);
        if (usedTime <= this.winTime) {
            this["winTf"].visible = true;
        }
        else {
            this["winTf"].visible = false;
        }
    };
    p.onTouch = function (e) {
        switch (e.target) {
            case this["cancelBtn"]:
                Main.ins.removeChild(this);
                Main.ins.addChild(GamePanel.getIns());
                break;
            case this["shareBtn"]:
                Main.ins.addChild(SharePanel.getIns());
                break;
        }
    };
    ResultPanel.getIns = function () {
        if (!ResultPanel.ins) {
            ResultPanel.ins = new ResultPanel();
        }
        return ResultPanel.ins;
    };
    return ResultPanel;
}(PanelBase));
egret.registerClass(ResultPanel,'ResultPanel');
