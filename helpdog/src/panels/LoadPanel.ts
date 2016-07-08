/**
 *
 * @author 
 *
 */
class LoadPanel extends PanelBase{
    
    public setPro(cur:number,total:number):void{
        if(!this["proTxt"]){
            return;
        }
        var per:number=cur/total;
        this["pro"].width=this["bg"].width*per;
        this["proTxt"].text=Math.floor(per*100)+"%"
    }
    
	public constructor() {
    	    super("src/panels/LoadPanelSkin.exml");
        this["proTxt"].text ="%22222"
	}
	
    private static ins: LoadPanel;
    public static getIns(): LoadPanel {
        if(!LoadPanel.ins) {
            LoadPanel.ins = new LoadPanel();
        }
        return LoadPanel.ins;
    }

}
