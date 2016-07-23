/**
 *
 * @author 
 *
 */
class SharePanel extends PanelBase{

    
	public constructor() {
    	   super("src/panels/SharePanelSkin.exml");
	}
	
    public onTouch(e: egret.TouchEvent): void {
        SoundManager.playBegin();
        Main.ins.removeChild(this);
    }
	
    
	
    private static ins: SharePanel;
    public static getIns(): SharePanel {
        if(!SharePanel.ins) {
            SharePanel.ins = new SharePanel();
        }
        return SharePanel.ins;
    }

}
