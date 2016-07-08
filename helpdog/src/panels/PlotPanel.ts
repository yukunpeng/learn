/**
 *
 * @author 
 *
 */
class PlotPanel extends PanelBase{
    private plotArr: string[] = ["plot1_jpg","plot2_jpg","plot3_jpg"];
    private pos:number;
    
	public constructor() {
    	   super("src/panels/PlotPanelSkin.exml");
        this.pos=0;
    }
    
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target){
            case this["jumpBtn"]:
                Main.ins.removeChild(this);
                Main.ins.addChild(RolePanel.getIns());
                break;
            case this["preBtn"]:
                this.pos--;
                if(this.pos == -1) {
                    this.pos = 0;
                }
                this["plotPic"].texture = RES.getRes(this.plotArr[this.pos]);
                break;
            default:
                this.pos++;
                if(this.pos == this.plotArr.length){
                    Main.ins.removeChild(this);
                    Main.ins.addChild(RolePanel.getIns());
                }else{
                    this["plotPic"].texture = RES.getRes(this.plotArr[this.pos]);
                }
                break;
        }
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
