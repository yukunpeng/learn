/**
 *
 * @author
 *
 */
var RolePanel = (function (_super) {
    __extends(RolePanel, _super);
    function RolePanel() {
        _super.call(this, "src/panels/RolePanelSkin.exml");
    }
    var d = __define,c=RolePanel,p=c.prototype;
    p.onTouch = function (e) {
        switch (e.target) {
            case this["manNormalBtn"]:
                this.select("boy");
                break;
            case this["girlNormalBtn"]:
                this.select("girl");
                break;
            case this["beginBtn"]:
                Hero.getIns().sex = this.sex;
                SoundManager.playBegin();
                Main.ins.removeChild(this);
                Main.ins.addChild(GamePanel.getIns());
                GamePanel.getIns().resetGame();
                break;
        }
    };
    p.select = function (sex) {
        this["selectBtn"].visible = false;
        this["beginBtn"].visible = true;
        if (sex == "boy") {
            this["manNormalBtn"].alpha = 0;
            this["manSelectBtn"].visible = true;
            this["girlNormalBtn"].alpha = 1;
            this["girlSelectBtn"].visible = false;
        }
        else {
            this["manNormalBtn"].alpha = 1;
            this["manSelectBtn"].visible = false;
            this["girlNormalBtn"].alpha = 0;
            this["girlSelectBtn"].visible = true;
        }
        this.sex = sex;
    };
    RolePanel.getIns = function () {
        if (!RolePanel.ins) {
            RolePanel.ins = new RolePanel();
        }
        return RolePanel.ins;
    };
    return RolePanel;
}(PanelBase));
egret.registerClass(RolePanel,'RolePanel');
