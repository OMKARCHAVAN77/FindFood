export class recipe{
    recId : number;
    name: string;
    price : number;
    description : string;
    image : string;
    category: string;
    chefName : string;
    origin : string;
    constructor( rId:number, rn: string, rp: number, rd: string, ri : string, rc: string, rch: string, ro: string){
        this.recId = rId;
        this.name = rn;
        this.price = rp;
        this.description = rd;
        this.image = ri;
        this.category = rc;
        this.chefName = rch;
        this.origin = ro;

    }
}