/**
 *
 * @author
 *
 */
var McManager = (function () {
    function McManager() {
    }
    var d = __define,c=McManager,p=c.prototype;
    McManager.getDog = function () {
        var data = RES.getRes("dog_json");
        var txtr = RES.getRes("dog_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData("dog"));
    };
    return McManager;
}());
egret.registerClass(McManager,'McManager');
