// export class Ingredient{
//     name : string;
//     brand : string;
//     price : string;
//     quantity : string;
//     unit : string;
//     spec : string;
//     image : string;
//     constructor(inm :string, ib: string, ip:string, iq: string, iu:string, is:string, ii:string){
//     this.name    =inm;
//     this.brand =ib;
//     this.price =ip;
//     this.quantity= iq;
//     this.unit =iu;
//     this.spec =is;
//     this.image =ii;    
//     }
        
// }
export class Ingredient{
    constructor(
    public name : string,
    public brand : string,
    public price : number,
    public quantity :number,
    public unit : string,
    public spec : string,
    public image : string

    ){}
}