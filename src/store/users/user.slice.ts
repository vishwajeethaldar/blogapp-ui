import { createAsyncThunk , PayloadAction, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { userState } from "../../interface/user.interface";
import { config } from "../../providers";

export const getUserInfo = createAsyncThunk(
    "user/getInformation",
    async(id:string, thunk)=>{
        try{
            const userdata = await axios.get(`${config().baseurl}/api/user/${id}`,{withCredentials:true})
            return userdata.data
        }
        catch(e:any){
            return thunk.rejectWithValue(e.message)
        }
    }
)


export const createNewUser = async(user:{name:string, email:string, password:string})=>{
    let res = await axios.post(`${config().baseurl}/api/register`, {
        name:user.name,
        email:user.email,
        password:user.password
    })
}


export const initialState:userState = {
    name:"",
    email:"",
    avatar:"",
    userId:"",
    role:"",
    loading:false,
    error:false,
    errorMsg:""
}


const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        removeUser:(state)=>{
            state.name="",
            state.email="",
            state.avatar="",
            state.userId="",
            state.role="",
            state.loading=false,
            state.error=false,
            state.errorMsg=""
        }
    },
    extraReducers(builder) {
        builder.addCase(getUserInfo.pending,(state, action)=>{
            state.loading = true,
            state.error = false
        })
        .addCase(getUserInfo.rejected,(state, action)=>{
            state.loading = false,
            state.error = true
        })
        .addCase(getUserInfo.fulfilled,(state, action:PayloadAction<any>)=>{
            state.name  = action.payload.name,
            state.email = action.payload.email,
            state.avatar = "",
            state.userId = action.payload._id,
            state.role = action.payload.role,
            state.loading = false,
            state.error = false,
            state.errorMsg = ""
        })
    },
})

export const removeUser = userSlice.actions
export default userSlice.reducer