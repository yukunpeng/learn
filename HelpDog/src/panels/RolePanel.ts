/**
 *
 * @author 
 *
 */
class RolePanel extends PanelBase{
    private boyDesc: string = "30秒太久啦！看我的！";
    private girlDesc: string = "别人家的汪都好起来啦！";
    
    private sex:string;
    
	public constructor() {
    	   super("src/panels/RolePanelSkin.exml");
    	   this.sex="boy";
        this["descTf"].text = this.boyDesc;
    }
    
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target) {
            case this["boyTf"]:
                this.sex = "boy";
                this["rect"].x=54;
                this["descTf"].text=this.boyDesc;
                break; 
            case this["girlTf"]:
                this.sex = "girl";
                this["rect"].x = 274;
                this["descTf"].text = this.girlDesc;
                break;
            case this["okBtn"]:
                Hero.getIns().sex=this.sex;
                Main.ins.removeChild(this);
                Main.ins.addChild(HomePanel.getIns());
                break;

        }
    }
    
    //======================
    
    private static ins: RolePanel;
    public static getIns(): RolePanel {
        if(!RolePanel.ins) {
            RolePanel.ins = new RolePanel();
        }
        return RolePanel.ins;
    }
}
