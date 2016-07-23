/**
 *
 * @author
 *
 */
var McManager = (function () {
    function McManager() {
    }
    var d = __define,c=McManager,p=c.prototype;
    p.getGirl = function () {
        var data = RES.getRes("run_json");
        var txtr = RES.getRes("run_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData("girl"));
    };
    McManager.getIns = function () {
        if (!McManager.ins) {
            McManager.ins = new McManager();
        }
        return McManager.ins;
    };
    return McManager;
}());
egret.registerClass(McManager,'McManager');
