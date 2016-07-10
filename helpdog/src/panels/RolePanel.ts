/**
 *
 * @author 
 *
 */
class RolePanel extends PanelBase{

    private sex:string;
    
	public constructor() {
    	   super("src/panels/RolePanelSkin.exml");
    }
    
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target) {
            case this["manNormalBtn"]:
                SoundManager.playBegin();
                this.select("boy");
                break; 
            case this["girlNormalBtn"]:
                SoundManager.playBegin();
                this.select("girl");
                break;
            case this["beginBtn"]:
                Hero.getIns().sex=this.sex;
                SoundManager.playBegin();
                Main.ins.removeChild(this);
                Main.ins.addChild(GamePanel.getIns());
                GamePanel.getIns().resetGame();
                break;
        }
    }
    
    private select(sex:string){
        this["selectBtn"].visible = false;
        this["beginBtn"].visible = true;
        if(sex=="boy"){
            this["manNormalBtn"].alpha = 0;
            this["manSelectBtn"].visible = true;
            this["girlNormalBtn"].alpha = 1;
            this["girlSelectBtn"].visible = false;
        }else{
            this["manNormalBtn"].alpha = 1;
            this["manSelectBtn"].visible = false;
            this["girlNormalBtn"].alpha = 0;
            this["girlSelectBtn"].visible = true;
        }
        
        this.sex=sex;
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
