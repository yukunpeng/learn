/**
 *
 * @author
 *
 */
var FailPanel = (function (_super) {
    __extends(FailPanel, _super);
    function FailPanel() {
        _super.call(this, "src/panels/FailPanelSkin.exml");
    }
    var d = __define,c=FailPanel,p=c.prototype;
    p.updateScore = function (score) {
        var best = this.getBest();
        if (score > best) {
            SoundManager.playWin();
            best = score;
            SaveManager.saveData(SaveManager.crayDogBest, best);
        }
        else {
            SoundManager.playFail();
        }
        this["bestLabel"].text = "" + best;
        this["scoreLabel"].text = "" + score;
    };
    p.getBest = function () {
        if (!SaveManager.getData(SaveManager.crayDogBest)) {
            return 0;
        }
        return parseInt(SaveManager.getData(SaveManager.crayDogBest));
    };
    p.onTouch = function (e) {
        switch (e.target) {
            case this["startBtn"]:
                SoundManager.playBegin();
                GamePanel.getIns().startGame();
                this.parent.removeChild(this);
                break;
        }
    };
    FailPanel.getIns = function () {
        if (!FailPanel.ins) {
            FailPanel.ins = new FailPanel();
        }
        return FailPanel.ins;
    };
    return FailPanel;
}(PanelBase));
egret.registerClass(FailPanel,'FailPanel');
