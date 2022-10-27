import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { commentInterface } from "../../interface";
import { config } from "../../providers";

export const getAllComments = createAsyncThunk(
    "commetns/all/comments",
    async({}, thunk)=>{
        try{
            const res  = await axios.get(`${config().baseurl}/api/comment/getall`, {withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)


export const addComment = createAsyncThunk(
    "commetns/add",
    async({userId, blogId,commentText,parentId}:{userId:string, blogId:string,commentText:string,parentId:string}, thunk)=>{
        try{
            const res  = await axios.post(`${config().baseurl}/api/comments/add`,{userId, blogId,commentText,parentId}, {withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)


export const deleteComment = createAsyncThunk(
    "commetns/delete",
    async({id}:{id:string}, thunk)=>{
        try{
            const res  = await axios.delete(`${config().baseurl}/api/comments/delete/${id}`, {withCredentials:true})
            return id;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)


export const updateComment = createAsyncThunk(
    "commetns/update",
    async({id, commentText}:{id:string,commentText:string}, thunk)=>{
        try{
            const res  = await axios.patch(`${config().baseurl}/api/comments/update/${id}`,{commentText}, {withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

const initialState:commentInterface.initialState = {
    loading:false,
    error:false,
    comments:[]
}


const commentSlice = createSlice({
    name:"commentSlice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllComments.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(getAllComments.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
        })
        .addCase(getAllComments.fulfilled, (state, action:PayloadAction<commentInterface.comments>)=>{
            state.loading = false;
            state.error = true;
            state.comments = action.payload.comments
        })
        .addCase(addComment.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(addComment.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
        })
        .addCase(addComment.fulfilled, (state, action:PayloadAction<commentInterface.comment>)=>{
            state.loading = false;
            state.error = true;
            state.comments = [...state.comments,{...action.payload}]
        })
        .addCase(deleteComment.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(deleteComment.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteComment.fulfilled, (state, action:PayloadAction<string>)=>{
            state.loading = false;
            state.error = true;
            state.comments = state.comments.filter((item)=>{
                return item._id!==action.payload
            })
        })
        .addCase(updateComment.pending, (state, action)=>{
            state.loading = true;
            state.error = false;
        })
        .addCase(updateComment.rejected, (state, action)=>{
            state.loading = false;
            state.error = true;
        })
        .addCase(updateComment.fulfilled, (state, action:PayloadAction<commentInterface.comment>)=>{
            state.loading = false;
            state.error = true;
            state.comments = state.comments.map((item)=>{
                if(item._id===action.payload._id){
                    return action.payload
                }else{
                    return item
                }
            })
        })
    }
})

export default commentSlice.reducer