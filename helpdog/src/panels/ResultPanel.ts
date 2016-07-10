/**
 *
 * @author 
 *
 */
class ResultPanel extends PanelBase{
    private winTime:number=9;
    
    
    public resetPanel(usedTime:number,score:number):void{
        var str: string = "";
        
        if(score<9){
            SoundManager.playFail();
            //游戏失败
            this["failGroup"].visible=true;
            this["winGroup"].visible = false;
            //失败图片
            this["dogPic"].texture = RES.getRes("buguanxin_png");
            //失败文字
            switch(score) {
                case 0:
                case 1:
                case 2:
                case 3:
                    str = "恭喜你，打败了45%的网友";
                    break;
                case 4:
                    str = "恭喜你，打败了47%的网友";
                    break;
                case 5:
                    str = "恭喜你，打败了49%的网友";
                    break;
                case 6:
                    str = "恭喜你，打败了51%的网友";
                    break;
                case 7:
                    str = "恭喜你，打败了53%的网友";
                    break;
                case 8:
                    str = "恭喜你，打败了55%的网友";
                    break;
            }
            this["failTf"].text=str;
        }else{
            SoundManager.playWin();
            //游戏胜利
            this["failGroup"].visible = false;
            this["winGroup"].visible = true;
            var force: number=99;
            if(usedTime>=9){
                force = 99 - (usedTime - 9) * 2;
            }
            str = "你爆发了"+force+"%的爱宠力量。";
            //胜利文字
            this["winTf"].text = str;
            this["failTf"].text = str;
            //胜利图片
            if(usedTime<=13){
                this["dogPic"].texture = RES.getRes("housailei_png");
            } else if(usedTime <= 18) {
                this["dogPic"].texture = RES.getRes("chayidian_png");
            } else if(usedTime <= 23) {
                this["dogPic"].texture = RES.getRes("jiayouba_png");
            } else if(usedTime <= 28) {
                this["dogPic"].texture = RES.getRes("huihuoxing_png");
            } else{
                this["dogPic"].texture = RES.getRes("buguanxin_png");
            }
        }
    }
    
	public constructor() {
    	   super("src/panels/ResultPanelSkin.exml");
	}
	
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target) {
            case this["cancelBtn"]:
                SoundManager.playBegin();
                Main.ins.removeChild(this);
                Main.ins.addChild(GamePanel.getIns());
                GamePanel.getIns().resetGame();
                break;
            case this["shareBtn"]:
                SoundManager.playBegin();
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
