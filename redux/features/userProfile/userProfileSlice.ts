import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { BASE_URL, token, userProfile } from "@/lib/definitions";

type initialStateType = {
  status: "idle" | "loading" | "failed" | "success";
  userProfile: userProfile | null;
  error: string | undefined;
};

const initialState: initialStateType = {
  status: "idle",
  userProfile: null,
  error: undefined,
};

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async () => {
      const response = await fetch(`${BASE_URL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await response.json();
    return data;
  }
);

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "success";
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userProfileSlice.reducer;

// create selectors
export const selectAvatar = (state: RootState) => state.userProfile.userProfile?.avatar;
export const selectBio = (state: RootState) => state.userProfile.userProfile?.bio;