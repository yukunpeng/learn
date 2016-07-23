/**
 *
 * @author
 *
 */
var Floor = (function (_super) {
    __extends(Floor, _super);
    function Floor() {
        _super.call(this);
        this.leftX = 85;
        this.rightX = 235;
        this.floorArr = [];
    }
    var d = __define,c=Floor,p=c.prototype;
    //下一步
    p.nextStep = function () {
        var floor = this.floorArr.shift();
        this.floorArr.push(floor);
        floor.x = this.getPosX(this.floorArr[3].x, GameData.getIns().getHardNum());
        for (var i = 0; i < 5; i++) {
            //定位y
            this.floorArr[i].y = 50 + 150 * i;
        }
    };
    //左边是否安全
    p.isLeftSafe = function () {
        if (this.floorArr[1].x == this.leftX) {
            return true;
        }
        return false;
    };
    p.initFloorArr = function () {
        for (var i = 0; i < 5; i++) {
            this.floorArr.push(this["floor" + i]);
        }
    };
    p.resetFloorArr = function () {
        for (var i = 0; i < 5; i++) {
            if (i < 2) {
                //前两个因为不走，所以随机
                if (Math.random() > 0.5) {
                    this.floorArr[i].x = this.leftX;
                }
                else {
                    this.floorArr[i].x = this.rightX;
                }
            }
            else {
                this.floorArr[i].x = this.getPosX(this.floorArr[i - 1].x, GameData.getIns().getHardNum());
            }
            //定位y
            this.floorArr[i].y = 50 + 150 * i;
        }
    };
    /**
     * 根据难度系数获得楼梯的位置
     * hardNum越大越难
     */
    p.getPosX = function (preX, hardNum) {
        if (Math.random() < hardNum) {
            //返回相反的位置
            if (preX == this.leftX) {
                return this.rightX;
            }
            else {
                return this.leftX;
            }
        }
        return preX;
    };
    return Floor;
}(eui.Component));
egret.registerClass(Floor,'Floor');
