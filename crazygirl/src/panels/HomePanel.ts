/**
 *
 * @author 
 *
 */
class HomePanel extends PanelBase{
	public constructor() {
    	   super("src/panels/HomePanelSkin.exml");
    	   
	}
	
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target){
            case this["startBtn"]:
                SoundManager.playBegin();
                GamePanel.getIns().startGame();
                this.parent.removeChild(this);
                break;
                
        }
    }
	
	private static ins:HomePanel;
	public static getIns():HomePanel{
	    if(!HomePanel.ins){
	        HomePanel.ins=new HomePanel();
	    }
	    return HomePanel.ins;
	}
}
