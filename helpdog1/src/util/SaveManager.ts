/**
* Created by Administrator on 2015/6/16.
*/
class SaveManager{
    //密码
    public static crayDogBest: string = "crayDogBest";
                    
    //保存指定的数据
    public static saveData(name:string,value:any)
    {
        egret.localStorage.setItem(name,value);
    }
    
    //获取指定数据
    public static getData(name:string)
    {
        return egret.localStorage.getItem(name);
    }
            
    //清空本地缓存
    public static clearAllData(){
        egret.localStorage.clear();
    }
}