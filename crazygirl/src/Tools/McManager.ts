/**
 *
 * @author 
 *
 */
class McManager {
    
    public getGirl():egret.MovieClip{
        var data = RES.getRes("run_json");
        var txtr = RES.getRes("run_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
    
        return new egret.MovieClip(mcFactory.generateMovieClipData("girl"));
    }
    
    private static ins: McManager;
    public static getIns(): McManager {
        if(!McManager.ins) {
            McManager.ins = new McManager();
        }
        return McManager.ins;
    }

}
