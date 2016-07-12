/**
 *
 * @author 
 *
 */
class McManager {
    //获得掉毛汪
    public static getDiaomao(): egret.MovieClip {
        var mc: egret.MovieClip = McManager.getMc("diaomao");
        mc.scaleX = mc.scaleY = 0.5;
        return mc;
    }

    //获得饥饿汪
    public static getJie(): egret.MovieClip {
        var mc: egret.MovieClip = McManager.getMc("jie");
        mc.scaleX = mc.scaleY = 0.5;
        return mc;
    }

    //获得生病汪
    public static getShengbing(): egret.MovieClip {
        var mc: egret.MovieClip = McManager.getMc("shengbing");
        mc.scaleX=mc.scaleY=0.5;
        return mc;
    }
    
    //获得扔狗粮的女孩
    public static getGirl(): egret.MovieClip {
        var mc: egret.MovieClip = McManager.getMc("girl");
        return mc;
    }
    
    //获得扔狗粮的男孩
    public static getBoy(): egret.MovieClip {
        return McManager.getMc("boy");
    }

    private static getMc(mcName:string):egret.MovieClip{
        var data = RES.getRes("mc_json");
        var txtr = RES.getRes("mc_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(mcName));
    }
}
