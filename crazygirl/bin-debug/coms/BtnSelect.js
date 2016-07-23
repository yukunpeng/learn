/**
 *
 * @author
 *
 */
var BtnSelect = (function (_super) {
    __extends(BtnSelect, _super);
    function BtnSelect() {
        _super.call(this);
    }
    var d = __define,c=BtnSelect,p=c.prototype;
    d(p, "toId"
        //操作toId
        ,function () {
            return this._toId;
        }
        ,function (value) {
            this._toId = value;
        }
    );
    //设置按钮标签
    p.setLabel = function (value) {
        this["btn"].label = value;
    };
    return BtnSelect;
}(eui.Component));
egret.registerClass(BtnSelect,'BtnSelect');
