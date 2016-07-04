/**
 *
 * @author 
 *
 */
class GamePanel extends PanelBase{
    private timer:egret.Timer;
    private totalTime:number=60;
    
    //狗狗初始左右坐标
    private rightX: number=378;
    private leftX: number=0;
    //狗狗初始y坐标
    private y1: number = 128;
    private y2: number = 276;
    private y3: number = 444;
    //三只汪
    private dog1: Dog;
    private dog2: Dog;
    private dog3: Dog;
    private dogArr:Dog[];
    
    private dogTime: number = 2000;
    private foodTime: number = 500;
    
    
    //重置游戏
    public resetGame():void{
        //倒计时
        this["countTf"].text=this.totalTime;
        //狗粮的位置
        this["food"].y = 704;
        //timer
        this.timer.reset();
        this.timer.start();
        //三只汪的位置
        this.dog1.x = this.rightX;
        this.dog1.y = this.y1;
        this.dog2.x = this.leftX;
        this.dog2.y = this.y2;
        this.dog3.x = this.rightX;
        this.dog3.y = this.y3;
        this.dog1.run();
        this.dog2.run();
        this.dog3.run();
        this.dog1.reset();
        this.dog2.reset();
        this.dog3.reset(); 
        this.dog1.visible = true;
        this.dog2.visible = true;
        this.dog3.visible = true;
        this.dog1.toLeft();
        this.dog2.toRight();
        this.dog3.toLeft();
        this.dogArr = [this.dog1,this.dog2,this.dog3];
        //三只汪跑起来
        egret.Tween.get(this.dog1,{ loop: true })
            .to({ x: this.leftX },this.dogTime).call(this.toLeftOver,this,[this.dog1])
            .to({ x: this.rightX },this.dogTime).call(this.toRightOver,this,[this.dog1]);
        egret.Tween.get(this.dog2,{ loop: true })
            .to({ x: this.rightX },this.dogTime).call(this.toRightOver,this,[this.dog2])
            .to({ x: this.leftX },this.dogTime).call(this.toLeftOver,this,[this.dog2]);
        egret.Tween.get(this.dog3,{ loop: true })
            .to({ x: this.leftX },this.dogTime).call(this.toLeftOver,this,[this.dog3])
            .to({ x: this.rightX },this.dogTime).call(this.toRightOver,this,[this.dog3]);
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnter,this);
    }
    
    //游戏结束
    private gameOver() {
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnter,this);
        egret.Tween.removeAllTweens();
        Main.ins.removeChild(this);
        Main.ins.addChild(ResultPanel.getIns());
        ResultPanel.getIns().resetPanel(this.timer.currentCount);
    }
    
    private onEnter(e:egret.Event):void{
        for(var i:number=0;i<this.dogArr.length;i++){
            if(Tools.hitTest(this["food"],this.dogArr[i])) {
                //汪星人饥饿值降低
                this.dogArr[i].hungry--;
                if(this.dogArr[i].hungry<=0){
                    //喂饱一只汪
                    egret.Tween.removeTweens(this.dogArr[i]);
                    this.dogArr[i].visible=false;
                    this.dogArr.splice(i,1);
                    //喂饱了所有的汪
                    if(this.dogArr.length==0){
                        //食物动画停止
                        egret.Tween.removeTweens(this["food"]);
                        //游戏结束
                        this.gameOver();
                    }
                }
                //实物归位
                egret.Tween.removeTweens(this["food"]);
                this["food"].y = 704;
                break;
            }
        }
    }
    
    private toRightOver(dog:Dog) {
        dog.toLeft();
    }
    private toLeftOver(dog: Dog) {
        dog.toRight();
    }

    
	public constructor() {
    	   super("src/panels/GamePanelSkin.exml");
    	   //更新性别
    	   if(Hero.getIns().sex=="girl"){
            this["thum"].texture = RES.getRes("girl_jpg");
    	   }
    	   //初始化timer
    	   this.timer=new egret.Timer(1000,this.totalTime);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        //初始化三只汪
        this.dog1 = new Dog();
        this.dog2 = new Dog();
        this.dog3 = new Dog();
        this.addChild(this.dog1);
        this.addChild(this.dog2);
        this.addChild(this.dog3);
    }

    //倒计时结束
    private onTimer(e: egret.TimerEvent): void {
        this["countTf"].text=this.timer.repeatCount-this.timer.currentCount;
    }
    //倒计时结束
    private timerCom(e: egret.TimerEvent): void {
        this.gameOver();
    }
    
    public onTouch(e: egret.TouchEvent): void {
        switch(e.target){
            case this["food"]:
                this.shoot();
                break;
        }
    }
    
    private shoot():void{
        egret.Tween.get(this["food"])
            .to({ y: -100 },this.foodTime).call(function(){
                this["food"].y=704;
            },this)
    }
    
    
    
    //======================
    
    private static ins: GamePanel;
    public static getIns(): GamePanel {
        if(!GamePanel.ins) {
            GamePanel.ins = new GamePanel();
        }
        return GamePanel.ins;
    }
}
