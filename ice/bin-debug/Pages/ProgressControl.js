/**
 *
 * @author
 *
 */
var ProgressControl = (function (_super) {
    __extends(ProgressControl, _super);
    function ProgressControl() {
        _super.call(this);
        this.maxwidth = -1;
    }
    var d = __define,c=ProgressControl,p=c.prototype;
    p.SetProgress = function (value) {
        if (this.maxwidth <= 0) {
            this.maxwidth = this._progress.width;
        }
        this._progress.width = this.maxwidth * value;
        this._point.x = this._progress.width;
    };
    return ProgressControl;
}(eui.Component));
egret.registerClass(ProgressControl,'ProgressControl');
