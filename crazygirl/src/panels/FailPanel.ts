/**
 *
 * @author 
 *
 */
class FailPanel extends PanelBase{
	public constructor() {
    	   super("src/panels/FailPanelSkin.exml");
	}
	
	public updateScore(score:number):void{
        var best:number=this.getBest();
        if(score>best){
            SoundManager.playWin();
            best=score;
            SaveManager.saveData(SaveManager.crayDogBest,best);
        }else{
            SoundManager.playFail();
        }
        this["bestLabel"].text = "" + best;
        this["scoreLabel"].text = "" + score;
	}
	
	private getBest():number{
    	   if(!SaveManager.getData(SaveManager.crayDogBest)){
    	       return 0;
    	   }
    	   return parseInt(SaveManager.getData(SaveManager.crayDogBest));
	}
	
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target) {
            case this["startBtn"]:
                SoundManager.playBegin();
                GamePanel.getIns().startGame();
                this.parent.removeChild(this);
                break;
        }
    }
	
    private static ins: FailPanel;
    public static getIns(): FailPanel{
        if(!FailPanel.ins){
            FailPanel.ins = new FailPanel();
	    }
        return FailPanel.ins;
	}
}
