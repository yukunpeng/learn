/**
 *
 * @author
 *
 */
var RolePanel = (function (_super) {
    __extends(RolePanel, _super);
    function RolePanel() {
        _super.call(this, "src/panels/RolePanelSkin.exml");
        this.boyDesc = "30秒太久啦！看我的！";
        this.girlDesc = "别人家的汪都好起来啦！";
        this.sex = "boy";
        this["descTf"].text = this.boyDesc;
    }
    var d = __define,c=RolePanel,p=c.prototype;
    p.onTouch = function (e) {
        switch (e.target) {
            case this["boyTf"]:
                this.sex = "boy";
                this["rect"].x = 54;
                this["descTf"].text = this.boyDesc;
                break;
            case this["girlTf"]:
                this.sex = "girl";
                this["rect"].x = 274;
                this["descTf"].text = this.girlDesc;
                break;
            case this["okBtn"]:
                Hero.getIns().sex = this.sex;
                Main.ins.removeChild(this);
                Main.ins.addChild(HomePanel.getIns());
                break;
        }
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
