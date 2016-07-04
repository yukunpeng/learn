/**
 *
 * @author 
 *
 */
class Hero {
    public sex: string;
    
	public constructor() {
	}
	
    //======================
    private static ins: Hero;
    public static getIns(): Hero {
        if(!Hero.ins) {
            Hero.ins = new Hero();
        }
        return Hero.ins;
    }
}
