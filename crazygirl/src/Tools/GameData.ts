/**
 *
 * @author 
 *
 */
class GameData {
    //难度系数
    private hardNum:number=0.3;
    //总时间
    private totalTime:number=8;
    
    public resetHardNum():void{
        this.hardNum=0.3;
    }
    public getHardNum():number{
        return this.hardNum;
    }
    public setHardNum(value:number): void {
        this.hardNum=value;
    }
    public getTotalTime(): number{
        return this.totalTime;
    }
    /**
     * 提高难度
     * 1，每次点击，难度系数增大0.002;
     * 2，每次点击，增多的时间=0.1*(1-难度系数);
     * 
     */ 
    
	public constructor() {
	}
	
    private static ins: GameData;
    public static getIns(): GameData {
        if(!GameData.ins) {
            GameData.ins = new GameData();
        }
        return GameData.ins;
    }
}
