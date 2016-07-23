/**
 *
 * @author
 *
 */
var HomePanel = (function (_super) {
    __extends(HomePanel, _super);
    function HomePanel() {
        _super.call(this, "src/panels/HomePanelSkin.exml");
    }
    var d = __define,c=HomePanel,p=c.prototype;
    p.onTouch = function (e) {
        switch (e.target) {
            case this["startBtn"]:
                SoundManager.playBegin();
                GamePanel.getIns().startGame();
                this.parent.removeChild(this);
                break;
        }
    };
    HomePanel.getIns = function () {
        if (!HomePanel.ins) {
            HomePanel.ins = new HomePanel();
        }
        return HomePanel.ins;
    };
    return HomePanel;
}(PanelBase));
egret.registerClass(HomePanel,'HomePanel');
