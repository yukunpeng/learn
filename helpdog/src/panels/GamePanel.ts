/**
 *
 * @author 
 *
 */
class GamePanel extends PanelBase{
    private score:number;
    
    private timer:egret.Timer;
    private totalTime:number=30;
    
    //狗狗初始左右坐标
    private rightX: number=540;
    private leftX: number=100;
    //狗狗初始y坐标
    private yArr: number[] = [158,306,474];
    //三只汪
    private shengbingDog: Dog;
    private jieDog: Dog;
    private diaomaoDog: Dog;
    private dogArr:Dog[];
    
    private dogTime: number = 2000;
    private foodTime: number = 500;
    private foodY:number=660;
    
    private man:Man;
    
    
    //重置游戏
    public resetGame():void{
        this.score=0;
        //狗粮的位置
        this["food"].y = this.foodY;
        //timer
        this.timer.reset();
        this.timer.start();
        this["timerTf"].text=this.totalTime+" S";
        //三只汪的位置
        this.dogArr = [this.shengbingDog,this.jieDog,this.diaomaoDog];
        for(var i:number=0;i<3;i++){
            var dog: Dog = this.dogArr[i];
            switch(i){
                case 0://向右
                    dog.x = this.leftX;
                    dog.toRight();
                    //汪跑起来
                    egret.Tween.get(dog,{ loop: true })
                        .to({ x: this.rightX },this.dogTime).call(this.toRightOver,this,[dog])
                        .to({ x: this.leftX },this.dogTime).call(this.toLeftOver,this,[dog]);
                    break;
                case 1://向左
                    dog.x = this.rightX;
                    dog.toLeft();
                    //汪跑起来
                    egret.Tween.get(dog,{ loop: true })
                        .to({ x: this.leftX },this.dogTime).call(this.toLeftOver,this,[dog])
                        .to({ x: this.rightX },this.dogTime).call(this.toRightOver,this,[dog]);
                    break;
                case 2://向右
                    dog.x = this.leftX;
                    dog.toRight();
                    //汪跑起来
                    egret.Tween.get(dog,{ loop: true })
                        .to({ x: this.rightX },this.dogTime).call(this.toRightOver,this,[dog])
                        .to({ x: this.leftX },this.dogTime).call(this.toLeftOver,this,[dog]);
                    break;
            }
            
            this.dogArr[i].run();
            this.dogArr[i].reset();
            this.dogArr[i].y=this.yArr[i];
        }
       
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnter,this);
    }
    
    //游戏结束
    private gameOver() {
        this.timer.stop();
        
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnter,this);
        egret.Tween.removeAllTweens();
        Main.ins.removeChild(this);
        Main.ins.addChild(ResultPanel.getIns());
        ResultPanel.getIns().resetPanel(this.timer.currentCount,this.score);
    }
    
    private onEnter(e:egret.Event):void{
        for(var i:number=0;i<this.dogArr.length;i++){
            if(Tools.hitTest(this["food"],this.dogArr[i])) {
                this.behit(this.dogArr[i],i);
                break;
            }
        }
    }
    
    private behit(dog:Dog,i:number):void{
        //this.gameOver();
        //return;
        this.score++;
        //汪星人饥饿值降低
        dog.hit();
        if(dog.hungry <= 0) {
            //喂饱一只汪
            egret.Tween.removeTweens(dog);
            dog.sit();
            switch(dog.type){
               case "shengbing":
                    dog.x = 475;
                    dog.y = 930;
                    break;
               case "jie":
                   dog.x = 265;
                   dog.y = 934;
                   break;
                case "diaomao":
                    dog.x = 205;
                    dog.y = 970;
                    break;
            }
            this.dogArr.splice(i,1);
            //喂饱了所有的汪
            if(this.dogArr.length == 0) {
                //食物动画停止
                egret.Tween.removeTweens(this["food"]);
                //游戏结束
                egret.Tween.get(this).wait(500).call(this.gameOver,this);
            }
        }
        //实物归位
        egret.Tween.removeTweens(this["food"]);
        this["food"].y = this.foodY;
    }
    
    private toRightOver(dog:Dog) {
        dog.toLeft();
    }
    private toLeftOver(dog: Dog) {
        dog.toRight();
    }

    
	public constructor() {
    	   super("src/panels/GamePanelSkin.exml");
    	   //根据性别生成人物
        this.man = new Man(Hero.getIns().sex);
        this.man.x = 320;
        this.man.y = 960;
        this.addChild(this.man);
        this.man.touchEnabled=true;
        this.man.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shoot,this);
    	   //初始化timer
    	   this.timer=new egret.Timer(1000,this.totalTime);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        //初始化三只汪
        this.jieDog = new Dog("jie");
        this.shengbingDog = new Dog("shengbing");
        this.diaomaoDog = new Dog("diaomao");
        this.addChild(this.jieDog);
        this.addChild(this.shengbingDog);
        this.addChild(this.diaomaoDog);
    }
    

    //倒计时结束
    private onTimer(e: egret.TimerEvent): void {
        this["timerTf"].text = this.timer.repeatCount-this.timer.currentCount+" S";
    }
    //倒计时结束
    private timerCom(e: egret.TimerEvent): void {
        this.gameOver();
    }
    
    
    private shoot():void{
        SoundManager.playBegin();
        //角色扔食物动画
        this.man.plit();
        //食物飞出去
        egret.Tween.get(this["food"])
            .to({ y: -100 },this.foodTime).call(function(){
                this["food"].y = this.foodY;
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
