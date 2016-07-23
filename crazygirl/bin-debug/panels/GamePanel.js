/**
 *
 * @author
 *
 */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this, "src/panels/GamePanelSkin.exml");
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
        this.pro.addEventListener("timeOver", this.gameOver, this);
    }
    var d = __define,c=GamePanel,p=c.prototype;
    p.startGame = function () {
        this.score = 0;
        this.updateScore(this.score);
        this.floor.resetFloorArr();
        this.resetHeroPos();
        this.pro.reset();
        this.hero.reset();
        GameData.getIns().resetHardNum();
        this["rightBtn"].visible = true;
        this["leftBtn"].visible = true;
    };
    p.onTouch = function (e) {
        this["rightBtn"].visible = false;
        this["leftBtn"].visible = false;
        if (e.stageX < 240) {
            this.hero.toLeft();
        }
        else {
            this.hero.toRight();
        }
        this.nextStep();
    };
    p.gameOver = function () {
        SoundManager.playHurt();
        this.hero.die();
        this.pro.stop();
        Main.ins.addChild(FailPanel.getIns());
        FailPanel.getIns().updateScore(this.score);
    };
    //重置英雄位置
    p.resetHeroPos = function () {
        if (this.floor.isLeftSafe()) {
            this.hero.toLeft();
        }
        else {
            this.hero.toRight();
        }
    };
    //前进一步
    p.nextStep = function () {
        this.floor.nextStep();
        if (this.hero.isAtLeft() != this.floor.isLeftSafe()) {
            //游戏结束
            this.gameOver();
        }
        else {
            //前进一步
            SoundManager.playRun();
            this.hero.jump();
            GameData.getIns().setHardNum(GameData.getIns().getHardNum() + 0.002);
            var disTime = 0.06 * (1 - GameData.getIns().getHardNum());
            this.pro.add(disTime);
            this.bg.step();
            //加分
            this.score++;
            this.updateScore(this.score);
        }
    };
    //======================
    p.updateScore = function (score) {
        this["scoreLabel"].text = "" + this.score;
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
