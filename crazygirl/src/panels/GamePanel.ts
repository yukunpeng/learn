/**
 *
 * @author 
 *
 */
class GamePanel extends PanelBase{
    private hero:Hero;
    private floor:Floor;
    private pro: Pro;
    private bg: Bg;
    
    private score:number;
    
	public constructor() {
    	   super("src/panels/GamePanelSkin.exml");
        this.hero = this["hero"];
        this.floor = this["floor"];
        this.pro = this["pro"];
        this.bg = this["bg"];
        this.pro.init();
        this.bg.init();
        this.floor.initFloorArr();
        this.floor.resetFloorArr();
        this.resetHeroPos();
        //时间到侦听
        this.pro.addEventListener("timeOver",this.gameOver,this);
    }
    
    public startGame():void{
        this.score=0;
        
        this.updateScore(this.score);
        this.floor.resetFloorArr();
        this.resetHeroPos();
        this.pro.reset();
        this.hero.reset();
        
        GameData.getIns().resetHardNum();
        this["rightBtn"].visible = true;
        this["leftBtn"].visible = true;
    }
    
    public onTouch(e: egret.TouchEvent): void {
        this["rightBtn"].visible = false;
        this["leftBtn"].visible = false;
        if(e.stageX<240){
            this.hero.toLeft();
        }else{
            this.hero.toRight();
        }
        this.nextStep();
    }
    
    private gameOver():void{
        SoundManager.playHurt();
        this.hero.die();
        this.pro.stop();
        Main.ins.addChild(FailPanel.getIns());
        FailPanel.getIns().updateScore(this.score);
    }
    
    //重置英雄位置
    private resetHeroPos():void{
        if(this.floor.isLeftSafe()) {
            this.hero.toLeft();
        } else {
            this.hero.toRight();
        }
    }
    
    //前进一步
    private nextStep():void{
        this.floor.nextStep();
        if(this.hero.isAtLeft()!=this.floor.isLeftSafe()){
            //游戏结束
            this.gameOver();
        }else{
            //前进一步
            SoundManager.playRun();
            this.hero.jump();
            GameData.getIns().setHardNum(GameData.getIns().getHardNum()+0.002);
            var disTime: number = 0.06 * (1 - GameData.getIns().getHardNum());
            this.pro.add(disTime);
            this.bg.step();
            //加分
            this.score++;
            this.updateScore(this.score);
        }
    }
    //======================
    private updateScore(score: number): void {
        this["scoreLabel"].text = "" + this.score;
    }
    private static ins: GamePanel;
    public static getIns(): GamePanel {
        if(!GamePanel.ins) {
            GamePanel.ins = new GamePanel();
        }
        return GamePanel.ins;
    }
}
