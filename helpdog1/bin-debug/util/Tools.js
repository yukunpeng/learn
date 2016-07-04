/**
 *
 * @author
 *
 */
var Tools = (function () {
    function Tools() {
    }
    var d = __define,c=Tools,p=c.prototype;
    Tools.hitTest = function (food, dog) {
        var foodRect = new egret.Rectangle(food.x, food.y, food.width, food.height);
        var dogRect = new egret.Rectangle(dog.x - dog.width / 2, dog.y - dog.height, dog.width, dog.height);
        return foodRect.intersects(dogRect);
    };
    return Tools;
}());
egret.registerClass(Tools,'Tools');
