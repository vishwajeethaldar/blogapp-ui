export interface comment {
    _id:string;
    userId:string;
    blogId:string;
    commentText:string;
    parentId?:string;
}

export interface comments {
    comments:Array<comment>
}

export interface initialState {
    loading:boolean;
    error:boolean;
    comments:Array<comment>
}

