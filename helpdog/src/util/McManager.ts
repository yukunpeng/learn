/**
 *
 * @author 
 *
 */
class McManager {
    
    public static getBoyDrop():egret.MovieClip{
        var data = RES.getRes("mcjson");
        var txtr = RES.getRes("mc_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(mcName));
    }
    
    private static getDog(mcName:string):egret.MovieClip{
        var data = RES.getRes("mcjson");
        var txtr = RES.getRes("mc_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(mcName));
    }
}
