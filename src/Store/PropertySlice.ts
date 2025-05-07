import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../Components/Tools";

export const baseURL = import.meta.env.VITE_BASE_URL;

export enum STATUSES {
  IDLE = "idle",
  ERROR = "error",
  LOADING = "loading",
}

export interface PropertyDataType {
  title: string;
  summary: string;
  images: string[];
  city: string;
  sector: string;
  map: {
    lat: number;
    lng: number;
  };
  price: string;
  owner: string;
  room: string;
  bath: string;
  area: string;
  meta_title: string;
  meta_description: string;
  rating: string;
  amenities: string[];
  propertyType: string;
  foolrSize: string;
  listedOn: string;
  buildingArea: string;
  address: string;
  _id?: string;
}
export interface PropertyUpdateDataType {
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  price: string;
  owner: string;
  room: string;
  bath: string;
  area: string;
  address: string;
  propertyType: string;
  foolrSize: string;
  buildingArea: string;
  listedOn: string;
  city?: string;
  sector?: string;
  map?: {
    lat?: number;
    lng?: number;
  };
  rating?: string;
  amenities?: string[];
  _id?: string;
}
export interface PropertyUpdateArg {
  id: string;
  data: PropertyUpdateDataType;
}

interface PropertyState {
  data: PropertyDataType[];
  status: STATUSES;
}
// Initial state
const initialState: PropertyState = {
  data: [],
  status: STATUSES.LOADING,
};

//fatch property
export const FetchProperty = createAsyncThunk<PropertyDataType[]>(
  "property/fetch",
  async () => {
    const response = await fetch(`${baseURL}/flats`);
    const data = await response.json();
    return data;
  }
);

//fatch property
export const FetchOneProperty = createAsyncThunk<PropertyDataType[]>(
  "propertyOne/fetch",
  async (id) => {
    const response = await fetch(`${baseURL}/flat/${id}`);
    const data = await response.json();
    return data;
  }
);

//create property
export const CreateService = createAsyncThunk<
  PropertyDataType,
  PropertyDataType
>("property/create", async (data, { rejectWithValue }) => {
  try {
    const response = await Axios.post(`${baseURL}/flats/create`, {
      ...data,
    });
    toast.success("Service created successfully.");
    Reloader(600);
    return response.data;
  } catch (error: any) {
    toast.error("Something went wrong", error.response?.data);
    Reloader(900);
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

//Update property
export const UpdateProperty = createAsyncThunk<
  PropertyUpdateArg,
  PropertyUpdateArg
>("property/update", async ({ data, id }, { rejectWithValue }) => {
  try {
    const response = await Axios.post(`${baseURL}/flats/update/${id}`, data);
    toast.success("Property updated successfully !");
    Reloader(1000);
    return response.data;
  } catch (error: any) {
    toast.error("Failed to update Property");
    return rejectWithValue(error.response?.data || "An error occurred");
  }
});

//Delete property
export const DeleteProduct = createAsyncThunk<void, string>(
  "product/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/flats/delete/${id}`).then(() => {
        toast.info("Product deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting Product:", error);
      toast.error("Internal server error!");
    }
  }
);

const propertySlice = createSlice({
  name: "propertys",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<PropertyDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProperty.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchProperty.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchProperty.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(FetchOneProperty.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchOneProperty.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchOneProperty.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = propertySlice.actions;
export default propertySlice.reducer;
