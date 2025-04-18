import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../Components/Tools";

import { STATUSES, baseURL } from "./PropertySlice";

interface OfficeDataType {
  title: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  configuration: string;
  RERACarpetArea: string;
  ReadyToPosses: string;
  AveragePricepersqft: string;
  RERAID: string;
  address: string;
  amenities: string[];
  map: {
    lat: Number;
    lng: Number;
  };
  images: string[];
  price: string;
  _id?: string;
}

interface OfficeState {
  data: OfficeDataType[];
  status: STATUSES;
}
// Initial state
const initialState: OfficeState = {
  data: [],
  status: STATUSES.LOADING,
};

//Fatch office
export const FetchOffice = createAsyncThunk<OfficeDataType[]>(
  "office/fetch",
  async () => {
    const response = await fetch(`${baseURL}/office`);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

//create office
export const CreateOffice = createAsyncThunk<OfficeDataType, OfficeDataType>(
  "office/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/office/create`, {
        ...data,
      });
      toast.success("Office created successfully.");
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
export const DeleteOffice = createAsyncThunk<void, string>(
  "office/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/office/delete/${id}`).then(() => {
        toast.info("Office deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting Office:", error);
      toast.error("Internal server error!");
    }
  }
);

const officeSlice = createSlice({
  name: "office",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<OfficeDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchOffice.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchOffice.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchOffice.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = officeSlice.actions;
export default officeSlice.reducer;
