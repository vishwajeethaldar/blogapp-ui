import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { bloginterface } from "../../interface";
import { config } from "../../providers";

export const addBlog = createAsyncThunk(
    "blog/add",
    async({categoryId,title,content,userId}:{categoryId:string,title:string,content:string, userId:string}, thunk)=>{
            try{
                const res = await axios.post(`${config().baseurl}/api/blog/add`,{categoryId,title,content,userId},{withCredentials:true})
                return res.data;
            }catch(e:any){
                return thunk.rejectWithValue(e.message)
            }
    }
)


export const deleteBlog = createAsyncThunk(
    "blog/delete",
    async({id}:{id:string}, thunk)=>{
        try{
            const res = await axios.delete(`${config().baseurl}/api/blog/delete/${id}`,{withCredentials:true})
            return id;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

export const updateBlog = createAsyncThunk(
    "blog/update",
    async({id, title,content}:{id:string, title?:string, content?:string}, thunk)=>{
        try{
            const res = await axios.patch(`${config().baseurl}/api/blog/update/${id}`,{title,content},{withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

export const getAllBlog = createAsyncThunk(
    "blog/getallblog",
    async(id, thunk)=>{
        try{
            const res = await axios.get(`${config().baseurl}/api/blog/getall`,{withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

export const getSelBlog = createAsyncThunk(
    "blog/getoneblog",
    async({id}:{id:string}, thunk)=>{
        try{
            const res = await axios.get(`${config().baseurl}/api/blog/getone/${id}`,{withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)


export const initialState:bloginterface.initialStateInterface = {
    loading:false,
    error:false,
    blogs:[],
}

const blogSlice = createSlice({
    name:"blogslice",
    initialState,
    reducers:{
        getSelectedBlog:(state,action:PayloadAction<string>)=>{
            let selected = state.blogs.filter((item)=>{
                    return item._id === action.payload
            })
            state.selectedBlog = selected[0]
        }
    },
    extraReducers(builder){
        builder.addCase(getAllBlog.pending, (state, action)=>{
            state.loading = true;
            state.error  = false;
        })
        .addCase(getAllBlog.rejected, (state, action)=>{
            state.loading = false;
            state.error  = true; 
            
        })
        .addCase(getAllBlog.fulfilled, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error  = false; 
            state.blogs = [...action.payload];          
          
        })
        .addCase(addBlog.pending, (state, action)=>{
            state.loading = true;
            state.error  = false;
        })
        .addCase(addBlog.rejected, (state, action)=>{
            state.loading = false;
            state.error  = true; 
        })
        .addCase(addBlog.fulfilled, (state, action:PayloadAction<bloginterface.bloginterface>)=>{
            state.loading = false;
            state.error  = false; 
            state.blogs = [...state.blogs, {...action.payload}]
        })
        .addCase(updateBlog.pending, (state, action)=>{
            state.loading = true;
            state.error  = false;
        })
        .addCase(updateBlog.rejected, (state, action)=>{
            state.loading = false;
            state.error  = true; 
        })
        .addCase(updateBlog.fulfilled, (state, action:PayloadAction<bloginterface.bloginterface>)=>{
            state.loading = false;
            state.error  = false; 
            state.blogs = state.blogs.map((item)=>{
                if(item._id===action.payload._id){
                    return action.payload
                }else{
                    return item
                }
            })
        })
        .addCase(deleteBlog.pending, (state, action)=>{
            state.loading = true;
            state.error  = false;
        })
        .addCase(deleteBlog.rejected, (state, action)=>{
            state.loading = false;
            state.error  = true; 
        })
        .addCase(deleteBlog.fulfilled, (state, action:PayloadAction<string>)=>{
            state.loading = false;
            state.error  = false; 
            state.blogs = state.blogs.filter((item)=>{
                if(item._id!==action.payload){
                    return item
                }
            })
        })

    }
})

export const {getSelectedBlog} =  blogSlice.actions;
export default blogSlice.reducer;

