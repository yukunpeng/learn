/**
 *
 * @author 
 *
 */
class LoadPanel extends PanelBase{
	public constructor() {
    	   super("src/panels/LoadPanelSkin.exml");
    	   
	}
	
    private static ins: LoadPanel;
    public static getIns(): LoadPanel {
        if(!LoadPanel.ins) {
            LoadPanel.ins = new LoadPanel();
        }
        return LoadPanel.ins;
    }

}
