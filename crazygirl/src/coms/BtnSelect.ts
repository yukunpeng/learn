/**
 *
 * @author 
 *
 */
class BtnSelect extends eui.Component{
    private _toId:number;
	public constructor() {
    	super();
	}
	//操作toId
	public get toId():number{
	    return this._toId;
	}
    public set toId(value:number) {
        this._toId=value;
    }
    //设置按钮标签
    public setLabel(value:string):void{
        this["btn"].label = value;
    }
}
