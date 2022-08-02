import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import propertyAPIService from './propertyAPIService'

const initialState = {
    properties: [],
    property: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getProperties = createAsyncThunk('properties/getAll', async(_, thunkAPI) =>{
try {
    return await propertyAPIService.getProperties()
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(
        message
    )
}
})

export const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProperties.pending, (state)=>{
                state.isLoading = true

            })
            .addCase(getProperties.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.properies = action.payload
            })
            .addCase(getProperties.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.properies = action.payload
            })
    }
})

export const {reset} = propertySlice.actions
export default propertySlice.reducer