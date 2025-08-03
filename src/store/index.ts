import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "@/store/modules/musicSlice.ts";
import { type TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    music: musicSlice,
  },
});

type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
