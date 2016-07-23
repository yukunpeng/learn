/**
* Created by Administrator on 2015/6/16.
*/
var SaveManager = (function () {
    function SaveManager() {
    }
    var d = __define,c=SaveManager,p=c.prototype;
    //保存指定的数据
    SaveManager.saveData = function (name, value) {
        egret.localStorage.setItem(name, value);
    };
    //获取指定数据
    SaveManager.getData = function (name) {
        return egret.localStorage.getItem(name);
    };
    //清空本地缓存
    SaveManager.clearAllData = function () {
        egret.localStorage.clear();
    };
    //密码
    SaveManager.crayDogBest = "crayDogBest";
    return SaveManager;
}());
egret.registerClass(SaveManager,'SaveManager');
