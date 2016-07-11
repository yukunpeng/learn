/**
 * Created by Administrator on 2015/5/22.
 */
var SoundManager = (function () {
    function SoundManager() {
    }
    var d = __define,c=SoundManager,p=c.prototype;
    SoundManager.playDog3 = function () {
        if (!SoundManager.dog3) {
            SoundManager.dog3 = RES.getRes("dog3_mp3");
        }
        SoundManager.dog3.play(0, 1);
    };
    SoundManager.playDog2 = function () {
        if (!SoundManager.dog2) {
            SoundManager.dog2 = RES.getRes("dog2_mp3");
        }
        SoundManager.dog2.play(0, 1);
    };
    SoundManager.playDog1 = function () {
        if (!SoundManager.dog1) {
            SoundManager.dog1 = RES.getRes("dog1_mp3");
        }
        SoundManager.dog1.play(0, 1);
    };
    //播放失败音乐
    SoundManager.playFail = function () {
        if (!SoundManager.fail) {
            SoundManager.fail = RES.getRes("fail_mp3");
        }
        SoundManager.fail.play(0, 1);
    };
    //播放跑步音乐
    SoundManager.playRun = function () {
        if (!SoundManager.run) {
            SoundManager.run = RES.getRes("run_mp3");
        }
        SoundManager.run.play(0, 1);
    };
    //播放胜利音乐
    SoundManager.playWin = function () {
        if (!SoundManager.win) {
            SoundManager.win = RES.getRes("win_mp3");
        }
        SoundManager.win.play(0, 1);
    };
    //播放跑步音乐
    SoundManager.playBegin = function () {
        if (!SoundManager.begin) {
            SoundManager.begin = RES.getRes("begin_mp3");
        }
        SoundManager.begin.play(0, 1);
    };
    //播放背景音乐
    SoundManager.playBg = function () {
        var bg = RES.getRes("water_mp3");
        bg.play(0, 0);
    };
    return SoundManager;
}());
egret.registerClass(SoundManager,'SoundManager');
