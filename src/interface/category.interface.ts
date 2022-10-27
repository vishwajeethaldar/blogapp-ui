
export interface category {
    _id:string;
    name:string;
    userId:string;
 }

export interface categoryInterface {
    categories:Array<category>;
    loading:boolean;
    error:boolean;
}



export interface catogories {
    categories:Array<category>;
}