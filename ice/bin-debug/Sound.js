var Sound = (function () {
    function Sound() {
        this.bgm = null;
        this.hai = null;
        this.gudian = null;
        this.bgmChannel = null;
        this.haiChannel = null;
        this.gudianChannel = null;
        this.gudianaudio = null;
        /*
        this.bgm = RES.getRes("bgm_mp3");
        this.hai = RES.getRes("hai_mp3");
        this.gudian = RES.getRes("gudian_mp3");
        this.bgmChannel = this.bgm.play(0,0);
        */
    }
    var d = __define,c=Sound,p=c.prototype;
    Sound.getInstance = function () {
        if (Sound._instance == null) {
            Sound._instance = new Sound();
        }
        return Sound._instance;
    };
    p.getGudianPoint = function () {
        if (this.gudianaudio == null) {
            return 0;
        }
        //console.log(this.gudianaudio.currentTime);
        return (this.gudianaudio.currentTime % 30) / 30;
    };
    p.PauseBGM = function () {
        playBGM(false);
        //egret.Tween.get(this.bgmChannel).to({ "volume": 0 },1000);
        //this.bgmChannel.volume = 0;
    };
    p.PlayBGM = function () {
        playBGM(true);
        //egret.Tween.get(this.bgmChannel).to({ "volume": 1 },1000);
        //this.bgmChannel.volume = 1;
    };
    p.PauseHai = function () {
        playDaHai(false);
        return;
        /*
        if(this.haiChannel != null){
            this.haiChannel.stop();
        }*/
    };
    p.PlayHai = function () {
        playDaHai(true);
        return;
        //this.haiChannel = this.hai.play(0,0);
    };
    p.PauseGudian = function () {
        playGudian(false);
        this.gudianaudio = null;
        return;
        /*
        if(this.gudianChannel != null) {
            this.gudianChannel.stop();
        }*/
    };
    p.PlayGudian = function () {
        this.gudianaudio = playGudian(true);
        return;
        //this.gudianChannel = this.gudian.play(0,1);
    };
    Sound._instance = null;
    return Sound;
}());
egret.registerClass(Sound,'Sound');
