/**
 * Created by Administrator on 2015/5/22.
 */
class SoundManager {
    private static run: egret.Sound;
    private static begin: egret.Sound;
    private static hurt: egret.Sound;
    private static fail: egret.Sound;
    private static win: egret.Sound;
    private static dog1: egret.Sound;
    private static dog2: egret.Sound;
    private static dog3: egret.Sound;
    
    
    
    public static playDog3(): void {
        if(!SoundManager.dog3) {
            SoundManager.dog3 = RES.getRes("dog3_mp3");
        }
        SoundManager.dog3.play(0,1);
    }
    public static playDog2(): void {
        if(!SoundManager.dog2) {
            SoundManager.dog2 = RES.getRes("dog2_mp3");
        }
        SoundManager.dog2.play(0,1);
    }
    public static playDog1(): void {
        if(!SoundManager.dog1) {
            SoundManager.dog1 = RES.getRes("dog1_mp3");
        }
        SoundManager.dog1.play(0,1);
    }
    
    //播放失败音乐
    public static playFail(): void {
        if(!SoundManager.fail) {
            SoundManager.fail = RES.getRes("fail_mp3");
        }
        SoundManager.fail.play(0,1);
    }
    //播放跑步音乐
    public static playRun(): void {
        if(!SoundManager.run) {
            SoundManager.run = RES.getRes("run_mp3");
        }
        SoundManager.run.play(0,1);
    }
    //播放胜利音乐
    public static playWin(): void {
        if(!SoundManager.win) {
            SoundManager.win = RES.getRes("win_mp3");
        }
        SoundManager.win.play(0,1);
    }
    //播放跑步音乐
    public static playBegin(): void {
        if(!SoundManager.begin) {
            SoundManager.begin = RES.getRes("begin_mp3");
        }
        SoundManager.begin.play(0,1);
    }


    //播放背景音乐
    public static playBg(): void {
        var bg: egret.Sound = RES.getRes("water_mp3");
        bg.play(0,0);
    }
}