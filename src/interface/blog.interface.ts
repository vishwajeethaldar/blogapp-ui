export interface bloginterface {
    _id:string;
    categoryId:string;
    title:string;
    content:string;
    userId:string;
    approved:boolean;
}

export interface blogsInterface {
    blogs:Array<bloginterface>
}

export interface initialStateInterface {
    loading:boolean;
    error:boolean;
    blogs:Array<bloginterface>;
    selectedBlog?:bloginterface;
}


