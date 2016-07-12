/**
 *
 * @author
 *
 */
var McManager = (function () {
    function McManager() {
    }
    var d = __define,c=McManager,p=c.prototype;
    //获得掉毛汪
    McManager.getDiaomao = function () {
        var mc = McManager.getMc("diaomao");
        mc.scaleX = mc.scaleY = 0.5;
        return mc;
    };
    //获得饥饿汪
    McManager.getJie = function () {
        var mc = McManager.getMc("jie");
        mc.scaleX = mc.scaleY = 0.5;
        return mc;
    };
    //获得生病汪
    McManager.getShengbing = function () {
        var mc = McManager.getMc("shengbing");
        mc.scaleX = mc.scaleY = 0.5;
        return mc;
    };
    //获得扔狗粮的女孩
    McManager.getGirl = function () {
        var mc = McManager.getMc("girl");
        return mc;
    };
    //获得扔狗粮的男孩
    McManager.getBoy = function () {
        return McManager.getMc("boy");
    };
    McManager.getMc = function (mcName) {
        var data = RES.getRes("mc_json");
        var txtr = RES.getRes("mc_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(mcName));
    };
    return McManager;
}());
egret.registerClass(McManager,'McManager');
