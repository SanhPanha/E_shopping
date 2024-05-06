import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { BASE_URL } from "@/lib/definitions";
import { useState } from "react";

type ValueTypes = {
  email: string;
  password: string;
    accessToken: string;
  refreshToken: string;
};
const initialState: ValueTypes = {
  email: "",
  password: "",
    accessToken: "",
    refreshToken: "",
};

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (values: ValueTypes) => {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
