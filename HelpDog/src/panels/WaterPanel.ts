/**
 *
 * @author 
 *
 */
class WaterPanel extends PanelBase{

    
	public constructor() {
    	   super("src/panels/WaterPanelSkin.exml");
    	   this.touchEnabled=false;
    	   this.touchChildren=false;
	}
 
    private static ins: WaterPanel;
    public static getIns(): WaterPanel {
        if(!WaterPanel.ins) {
            WaterPanel.ins = new WaterPanel();
        }
        return WaterPanel.ins;
    }

}
