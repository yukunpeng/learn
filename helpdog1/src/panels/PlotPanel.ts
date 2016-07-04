/**
 *
 * @author 
 *
 */
class PlotPanel extends PanelBase{
    private plot:string[];
    private pos:number;
    
	public constructor() {
    	   super("src/panels/PlotPanelSkin.exml");
        this.plot=RES.getRes("plot_json");
        this.pos=0;
        
        this.updateView();
    }
    
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target){
            case this["jumpTf"]:
                Main.ins.removeChild(this);
                Main.ins.addChild(RolePanel.getIns());
                break;
            default:
                this.pos++;
                if(this.pos>=this.plot.length){
                    Main.ins.removeChild(this);
                    Main.ins.addChild(RolePanel.getIns());
                }else{
                    this.updateView();    
                }
                break;
        }
    }
    
    
    
    private updateView():void{
        this["plotTf"].text=this.plot[this.pos];
    }
    
    //======================
    private static ins: PlotPanel;
    public static getIns(): PlotPanel {
        if(!PlotPanel.ins) {
            PlotPanel.ins = new PlotPanel();
        }
        return PlotPanel.ins;
    }
}
