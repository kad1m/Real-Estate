import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import profileService from "./profileService";


const initialState = {
    user: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const getProfile = createAsyncThunk(
    "profile/me",
    async (_, thunkAPI) => {
        try {
            return await profileService.getProfile();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const profileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.profile;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const {reset} = profileSlice.actions;
export default profileSlice.reducer;