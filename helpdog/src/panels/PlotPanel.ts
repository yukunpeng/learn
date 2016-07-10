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
        egret.Tween.get(this["preBtn"],{"loop":true})
          .to({"scaleX":0.9,"scaleY":0.9},500)
          .to({ "scaleX": 1,"scaleY": 1 },500);
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
                egret.Tween.get(this["plotGroup"]).to({"x":-this.pos*640},300);
                break;
            default:
                this.pos++;
                if(this.pos == this.plotArr.length){
                    Main.ins.removeChild(this);
                    Main.ins.addChild(RolePanel.getIns());
                }else{
                    egret.Tween.get(this["plotGroup"]).to({ "x": -this.pos * 640 },300);
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
