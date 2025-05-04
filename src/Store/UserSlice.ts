import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../Components/Tools";

import { STATUSES, baseURL } from "./PropertySlice";

export interface UserDataType {
  name: string;
  email: string;
  image?: string;
  number: string;
  role?: string;
  _id?: string;
}

interface UserState {
  data: UserDataType[];
  status: STATUSES;
}
// Initial state
const initialState: UserState = {
  data: [],
  status: STATUSES.LOADING,
};

//Fatch user
export const FetchUsers = createAsyncThunk<UserDataType[]>(
  "users/fetch",
  async () => {
    const response = await fetch(`${baseURL}/users`);
    const data = await response.json();
    return data;
  }
);

export const CreateUser = createAsyncThunk<UserDataType, UserDataType>(
  "user/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/user/create`, {
        ...data,
      });
      toast.success("User created successfully.");
      Reloader(600);
      return response.data;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

//Delete Office
// export const DeleteOffice = createAsyncThunk<void, string>(
//   "office/delete",
//   async (id) => {
//     try {
//       await Axios.post(`${baseURL}/office/delete/${id}`).then(() => {
//         toast.info("Office deleted successfully !");
//         Reloader(1000);
//       });
//     } catch (error) {
//       console.error("Error deleting Office:", error);
//       toast.error("Internal server error!");
//     }
//   }
// );

const userSlice = createSlice({
  name: "office",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<UserDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchUsers.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = userSlice.actions;
export default userSlice.reducer;
