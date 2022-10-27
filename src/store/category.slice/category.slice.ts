import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { categoryint } from '../../interface'
import { config } from '../../providers'

export const addCategory = createAsyncThunk(
    "category/add",
    async(data:{name:string, userId:string}, thunk)=>{
        try{
            let res = await axios.post(`${config().baseurl}/api/category/add`, {name:data.name, userId:data.userId}, {withCredentials:true})
            return res.data;
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

export const deleteCategory = createAsyncThunk(
    "category/delete",
    async({id}:{id:string}, thunk)=>{
        try{
            const res = await axios.delete(`${config().baseurl}/api/category/delete/${id}`,{withCredentials:true})
            return id
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

export const updateCategory = createAsyncThunk(
    "category/update",
    async({id, name}:{id:string, name:string}, thunk)=>{
        try{
            const res = await axios.patch(`${config().baseurl}/api/category/update/${id}`,{name:name},{withCredentials:true})
            return res.data
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)



export const getAllCategory = createAsyncThunk(
    "category/getall",
    async(id, thunk)=>{
        try{
            const res = await axios.get(`${config().baseurl}/api/category/getAll`, {withCredentials:true})
            return res.data
        }catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)

const initialState:categoryint.categoryInterface = {
    loading:false,
    error:false,
    categories:[]
}

const categorySlice = createSlice({
    name:"categorySlice",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addCategory.pending, (state, action)=>{
            state.loading = true;
            state.error = false
        })
        .addCase(addCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = true
        })
        .addCase(addCategory.fulfilled, (state, action:PayloadAction<categoryint.category>)=>{
            state.loading = false;
            state.error = false;
            state.categories = [...state.categories, {...action.payload}]
        })
        .addCase(deleteCategory.pending,(state, action)=>{
            state.loading = true;
            state.error = false   
        })
        .addCase(deleteCategory.rejected,(state, action)=>{
            state.loading = false;
            state.error = true 
        })
        .addCase(deleteCategory.fulfilled,(state, action:PayloadAction<string>)=>{
            state.loading = false;
            state.error = true 
            state.categories = state.categories.filter((item)=>{
                    return item._id!==action.payload;
            })
        })
        .addCase(getAllCategory.pending,(state, action)=>{
            state.loading = true;
            state.error = false   
        })
        .addCase(getAllCategory.rejected,(state, action)=>{
            state.loading = false;
            state.error = true;
           
        })
        .addCase(getAllCategory.fulfilled,(state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = true 
            state.categories = action.payload
        })
        .addCase(updateCategory.pending,(state, action)=>{
            state.loading = true;
            state.error = false   
        })
        .addCase(updateCategory.rejected,(state, action)=>{
            state.loading = false;
            state.error = true 
        })
        .addCase(updateCategory.fulfilled,(state, action:PayloadAction<categoryint.category>)=>{
            state.loading = false;
            state.error = true 
            state.categories = state.categories.map((item)=>{
                    if(item._id===action.payload._id){
                        return action.payload
                    }else{
                        return item
                    }
            })
        })

    },
})

export default categorySlice.reducer 