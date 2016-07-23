/**
 *
 * @author
 *
 */
var GameData = (function () {
    /**
     * 提高难度
     * 1，每次点击，难度系数增大0.002;
     * 2，每次点击，增多的时间=0.1*(1-难度系数);
     *
     */
    function GameData() {
        //难度系数
        this.hardNum = 0.3;
        //总时间
        this.totalTime = 8;
    }
    var d = __define,c=GameData,p=c.prototype;
    p.resetHardNum = function () {
        this.hardNum = 0.3;
    };
    p.getHardNum = function () {
        return this.hardNum;
    };
    p.setHardNum = function (value) {
        this.hardNum = value;
    };
    p.getTotalTime = function () {
        return this.totalTime;
    };
    GameData.getIns = function () {
        if (!GameData.ins) {
            GameData.ins = new GameData();
        }
        return GameData.ins;
    };
    return GameData;
}());
egret.registerClass(GameData,'GameData');
