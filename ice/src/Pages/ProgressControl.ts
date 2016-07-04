/**
 *
 * @author 
 *
 */
class ProgressControl extends eui.Component {
    private _progress:eui.Image;
    private _point:eui.Image;
	public constructor() {
        super();
        
	}
	private maxwidth:number = -1;
    public SetProgress(value:number){
        if(this.maxwidth <=0){
            this.maxwidth = this._progress.width;
        }
        this._progress.width = this.maxwidth * value;
        this._point.x = this._progress.width;
    }
}
