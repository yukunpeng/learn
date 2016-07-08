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
        this.rightX = 540;
        this.leftX = 100;
        //狗狗初始y坐标
        this.yArr = [128, 276, 444];
        this.dogTime = 2000;
        this.foodTime = 500;
        this.foodY = 660;
        //根据性别生成人物
        this.man = new Man(Hero.getIns().sex);
        this.man.x = 320;
        this.man.y = 960;
        this.addChild(this.man);
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
        this.score = 0;
        //狗粮的位置
        this["food"].y = this.foodY;
        //timer
        this.timer.reset();
        this.timer.start();
        this["timerTf"].text = this.totalTime;
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
                        .to({ x: this.rightX }, this.dogTime).call(this.toRightOver, this, [dog])
                        .to({ x: this.leftX }, this.dogTime).call(this.toLeftOver, this, [dog]);
                    break;
                case 1:
                    dog.x = this.rightX;
                    dog.toLeft();
                    //汪跑起来
                    egret.Tween.get(dog, { loop: true })
                        .to({ x: this.leftX }, this.dogTime).call(this.toLeftOver, this, [dog])
                        .to({ x: this.rightX }, this.dogTime).call(this.toRightOver, this, [dog]);
                    break;
                case 2:
                    dog.x = this.leftX;
                    dog.toRight();
                    //汪跑起来
                    egret.Tween.get(dog, { loop: true })
                        .to({ x: this.rightX }, this.dogTime).call(this.toRightOver, this, [dog])
                        .to({ x: this.leftX }, this.dogTime).call(this.toLeftOver, this, [dog]);
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
        this.score++;
        //汪星人饥饿值降低
        dog.hungry--;
        if (dog.hungry <= 0) {
            //喂饱一只汪
            egret.Tween.removeTweens(dog);
            dog.sit();
            switch (dog.type) {
                case "shengbing":
                    dog.x = 475;
                    dog.y = 930;
                    break;
                case "jie":
                    dog.x = 265;
                    dog.y = 930;
                    break;
                case "diaomao":
                    dog.x = 205;
                    dog.y = 970;
                    break;
            }
            this.dogArr.splice(i, 1);
            //喂饱了所有的汪
            if (this.dogArr.length == 0) {
                //食物动画停止
                egret.Tween.removeTweens(this["food"]);
                //游戏结束
                egret.Tween.get(this).wait(1000).call(this.gameOver, this);
            }
        }
        //实物归位
        egret.Tween.removeTweens(this["food"]);
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
        this["timerTf"].text = this.timer.repeatCount - this.timer.currentCount;
    };
    //倒计时结束
    p.timerCom = function (e) {
        this.gameOver();
    };
    p.onTouch = function (e) {
        switch (e.target) {
            case this["food"]:
                this.shoot();
                break;
        }
    };
    p.shoot = function () {
        //角色扔食物动画
        this.man.plit();
        //食物飞出去
        egret.Tween.get(this["food"])
            .to({ y: -100 }, this.foodTime).call(function () {
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
