/**
 *
 * @author
 *
 */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this, "src/panels/GamePanelSkin.exml");
        this.totalTime = 60;
        //狗狗初始左右坐标
        this.rightX = 540;
        this.leftX = 100;
        //狗狗初始y坐标
        this.y1 = 128;
        this.y2 = 276;
        this.y3 = 444;
        this.dogTime = 2000;
        this.foodTime = 500;
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
        this.dog1 = new Dog("jie");
        this.dog2 = new Dog("shengbing");
        this.dog3 = new Dog("diaomao");
        this.addChild(this.dog1);
        this.addChild(this.dog2);
        this.addChild(this.dog3);
    }
    var d = __define,c=GamePanel,p=c.prototype;
    //重置游戏
    p.resetGame = function () {
        //倒计时
        this["countTf"].text = this.totalTime;
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
        this.dogArr = [this.dog1, this.dog2, this.dog3];
        //三只汪跑起来
        egret.Tween.get(this.dog1, { loop: true })
            .to({ x: this.leftX }, this.dogTime).call(this.toLeftOver, this, [this.dog1])
            .to({ x: this.rightX }, this.dogTime).call(this.toRightOver, this, [this.dog1]);
        egret.Tween.get(this.dog2, { loop: true })
            .to({ x: this.rightX }, this.dogTime).call(this.toRightOver, this, [this.dog2])
            .to({ x: this.leftX }, this.dogTime).call(this.toLeftOver, this, [this.dog2]);
        egret.Tween.get(this.dog3, { loop: true })
            .to({ x: this.leftX }, this.dogTime).call(this.toLeftOver, this, [this.dog3])
            .to({ x: this.rightX }, this.dogTime).call(this.toRightOver, this, [this.dog3]);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnter, this);
    };
    //游戏结束
    p.gameOver = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnter, this);
        egret.Tween.removeAllTweens();
        Main.ins.removeChild(this);
        Main.ins.addChild(ResultPanel.getIns());
        ResultPanel.getIns().resetPanel(this.timer.currentCount);
    };
    p.onEnter = function (e) {
        for (var i = 0; i < this.dogArr.length; i++) {
            if (Tools.hitTest(this["food"], this.dogArr[i])) {
                //汪星人饥饿值降低
                this.dogArr[i].hungry--;
                if (this.dogArr[i].hungry <= 0) {
                    //喂饱一只汪
                    egret.Tween.removeTweens(this.dogArr[i]);
                    this.dogArr[i].visible = false;
                    this.dogArr.splice(i, 1);
                    //喂饱了所有的汪
                    if (this.dogArr.length == 0) {
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
    };
    p.toRightOver = function (dog) {
        dog.toLeft();
    };
    p.toLeftOver = function (dog) {
        dog.toRight();
    };
    //倒计时结束
    p.onTimer = function (e) {
        this["countTf"].text = this.timer.repeatCount - this.timer.currentCount;
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
            this["food"].y = 704;
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
