/**
 *
 * @author
 *
 */
var Hero = (function () {
    function Hero() {
    }
    var d = __define,c=Hero,p=c.prototype;
    Hero.getIns = function () {
        if (!Hero.ins) {
            Hero.ins = new Hero();
        }
        return Hero.ins;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
