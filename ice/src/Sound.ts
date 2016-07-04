/**
 *
 * @author 
 *
 */
declare function playGudian(play);
declare function playDaHai(play);
declare function playBGM(play);
class Sound {
    private static _instance:Sound = null;
    public static getInstance(){
        if(Sound._instance == null){
            Sound._instance = new Sound();
        }
        return Sound._instance;
    }
    private bgm:egret.Sound = null;
    private hai: egret.Sound = null;
    private gudian: egret.Sound = null;
    private bgmChannel: egret.SoundChannel = null;
    private haiChannel: egret.SoundChannel = null;
    private gudianChannel: egret.SoundChannel = null;
    private gudianaudio = null;
	public constructor() {
    	/*
        this.bgm = RES.getRes("bgm_mp3");
        this.hai = RES.getRes("hai_mp3");
        this.gudian = RES.getRes("gudian_mp3");
        this.bgmChannel = this.bgm.play(0,0);
        */
	}
	public getGudianPoint():number{
        if(this.gudianaudio == null){
            return 0;
        }
        //console.log(this.gudianaudio.currentTime);
        return (this.gudianaudio.currentTime % 30) / 30;
	}
	public PauseBGM(){
    	  playBGM(false);
        //egret.Tween.get(this.bgmChannel).to({ "volume": 0 },1000);
        //this.bgmChannel.volume = 0;
	}
	public PlayBGM(){
        playBGM(true);
        //egret.Tween.get(this.bgmChannel).to({ "volume": 1 },1000);
        //this.bgmChannel.volume = 1;
	}
    public PauseHai(){
        playDaHai(false);
        return;
        /*
        if(this.haiChannel != null){
            this.haiChannel.stop();
        }*/
	}
    public PlayHai() {
        playDaHai(true);
        return;
        //this.haiChannel = this.hai.play(0,0);
    }
    public PauseGudian() {
        playGudian(false);
        this.gudianaudio = null;
        return;
        /*
        if(this.gudianChannel != null) {
            this.gudianChannel.stop();
        }*/
    }
    public PlayGudian() {
        this.gudianaudio = playGudian(true);
        return;
        //this.gudianChannel = this.gudian.play(0,1);
    }
}
