/**
 *
 * @author 
 *
 */
class McManager {
    
    public static getDog():egret.MovieClip{
        var data = RES.getRes("dog_json");
        var txtr = RES.getRes("dog_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData("dog"));
    }
}
