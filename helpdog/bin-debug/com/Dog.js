/**
 *
 * @author
 *
 */
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.call(this);
        this.dog = McManager.getDog();
        this.addChild(this.dog);
    }
    var d = __define,c=Dog,p=c.prototype;
    p.reset = function () {
        this.hungry = 3;
    };
    p.run = function () {
        this.dog.gotoAndPlay("run", -1);
    };
    p.toRight = function () {
        this.dog.scaleX = -1;
    };
    p.toLeft = function () {
        this.dog.scaleX = 1;
    };
    return Dog;
}(egret.Sprite));
egret.registerClass(Dog,'Dog');
