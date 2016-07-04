/**
 *
 * @author 
 *
 */
class ResultPanel extends PanelBase{
    private winTime:number=9;
    
    
    public resetPanel(usedTime:number):void{
        if(usedTime<=this.winTime){
            this["winTf"].visible=true;
        }else{
            this["winTf"].visible = false;
        }
    }
    
	public constructor() {
    	   super("src/panels/ResultPanelSkin.exml");
	}
	
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target) {
            case this["cancelBtn"]:
                Main.ins.removeChild(this);
                Main.ins.addChild(HomePanel.getIns());
                break;
            case this["shareBtn"]:
                Main.ins.addChild(SharePanel.getIns());
                break;
        }
    }
	
    
	
    private static ins: ResultPanel;
    public static getIns(): ResultPanel {
        if(!ResultPanel.ins) {
            ResultPanel.ins = new ResultPanel();
        }
        return ResultPanel.ins;
    }

}
