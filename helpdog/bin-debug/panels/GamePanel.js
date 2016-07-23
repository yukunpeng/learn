/**
 *
 * @author
 *
 */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this, "src/panels/GamePanelSkin.exml");
        this.totalTime = 30;
        //狗狗初始左右坐标
        this.rightX = 590;
        this.leftX = 50;
        //狗狗初始y坐标
        this.yArr = [158, 306, 474];
        this.dogTime1 = 2000;
        this.dogTime2 = 1500;
        this.dogTime3 = 1000;
        this.foodTime = 2000;
        this.foodY = 660;
        this.isShoot = false;
        //根据性别生成人物
        this.man = new Man(Hero.getIns().sex);
        this.man.x = 320;
        this.man.y = 832;
        this.addChild(this.man);
        this.man.touchEnabled = true;
        this.man.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shoot, this);
        //初始化timer
        this.timer = new egret.Timer(1000, this.totalTime);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerCom, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        //初始化三只汪
        this.jieDog = new Dog("jie");
        this.shengbingDog = new Dog("shengbing");
        this.diaomaoDog = new Dog("diaomao");
        this.addChild(this.jieDog);
        this.addChild(this.shengbingDog);
        this.addChild(this.diaomaoDog);
    }
    var d = __define,c=GamePanel,p=c.prototype;
    //重置游戏
    p.resetGame = function () {
        this.isShoot = false;
        this.score = 0;
        //狗粮的位置
        this["food"].y = this.foodY;
        //timer
        this.timer.reset();
        this.timer.start();
        this["timerTf"].text = this.totalTime + " S";
        //三只汪的位置
        this.dogArr = [this.shengbingDog, this.jieDog, this.diaomaoDog];
        for (var i = 0; i < 3; i++) {
            var dog = this.dogArr[i];
            switch (i) {
                case 0:
                    dog.x = this.leftX;
                    dog.toRight();
                    //汪跑起来
                    egret.Tween.get(dog, { loop: true })
                        .to({ x: this.rightX }, this.dogTime1, egret.Ease.quadInOut).call(this.toRightOver, this, [dog]).wait(200)
                        .to({ x: this.leftX }, this.dogTime1, egret.Ease.quadInOut).call(this.toLeftOver, this, [dog]).wait(200);
                    break;
                case 1:
                    dog.x = this.rightX;
                    dog.toLeft();
                    //汪跑起来
                    egret.Tween.get(dog, { loop: true })
                        .to({ x: this.leftX }, this.dogTime2, egret.Ease.quadInOut).call(this.toLeftOver, this, [dog]).wait(250)
                        .to({ x: this.rightX }, this.dogTime2, egret.Ease.quadInOut).call(this.toRightOver, this, [dog]).wait(250);
                    break;
                case 2:
                    dog.x = this.leftX;
                    dog.toRight();
                    //汪跑起来
                    egret.Tween.get(dog, { loop: true })
                        .to({ x: this.rightX }, this.dogTime3, egret.Ease.quadInOut).call(this.toRightOver, this, [dog]).wait(300)
                        .to({ x: this.leftX }, this.dogTime3, egret.Ease.quadInOut).call(this.toLeftOver, this, [dog]).wait(300);
                    break;
            }
            this.dogArr[i].run();
            this.dogArr[i].reset();
            this.dogArr[i].y = this.yArr[i];
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnter, this);
    };
    //游戏结束
    p.gameOver = function () {
        this.timer.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnter, this);
        egret.Tween.removeAllTweens();
        Main.ins.removeChild(this);
        Main.ins.addChild(ResultPanel.getIns());
        ResultPanel.getIns().resetPanel(this.timer.currentCount, this.score);
    };
    p.onEnter = function (e) {
        for (var i = 0; i < this.dogArr.length; i++) {
            if (Tools.hitTest(this["food"], this.dogArr[i])) {
                this.behit(this.dogArr[i], i);
                break;
            }
        }
    };
    p.behit = function (dog, i) {
        //this.gameOver();
        //return;
        this.score++;
        //汪星人饥饿值降低
        dog.hit();
        if (dog.hungry <= 0) {
            //喂饱一只汪
            egret.Tween.removeTweens(dog);
            dog.sit();
            switch (dog.type) {
                case "shengbing":
                    dog.x = 475;
                    dog.y = 810;
                    break;
                case "jie":
                    dog.x = 265;
                    dog.y = 813;
                    break;
                case "diaomao":
                    dog.x = 205;
                    dog.y = 838;
                    break;
            }
            this.dogArr.splice(i, 1);
            //喂饱了所有的汪
            if (this.dogArr.length == 0) {
                //食物动画停止
                egret.Tween.removeTweens(this["food"]);
                //游戏结束
                egret.Tween.get(this).wait(500).call(this.gameOver, this);
            }
        }
        //实物归位
        egret.Tween.removeTweens(this["food"]);
        this.isShoot = false;
        this["food"].y = this.foodY;
    };
    p.toRightOver = function (dog) {
        dog.toLeft();
    };
    p.toLeftOver = function (dog) {
        dog.toRight();
    };
    //倒计时结束
    p.onTimer = function (e) {
        this["timerTf"].text = this.timer.repeatCount - this.timer.currentCount + " S";
    };
    //倒计时结束
    p.timerCom = function (e) {
        this.gameOver();
    };
    p.shoot = function () {
        if (this.isShoot) {
            return;
        }
        this.isShoot = true;
        SoundManager.playBegin();
        //角色扔食物动画
        this.man.plit();
        //食物飞出去
        egret.Tween.get(this["food"])
            .to({ y: -100 }, this.foodTime).call(function () {
            this.isShoot = false;
            this["food"].y = this.foodY;
        }, this);
    };
    GamePanel.getIns = function () {
        if (!GamePanel.ins) {
            GamePanel.ins = new GamePanel();
        }
        return GamePanel.ins;
    };
    return GamePanel;
}(PanelBase));
egret.registerClass(GamePanel,'GamePanel');
