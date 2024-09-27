import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";

const initialStateA = { a: 0 };
const sliceA = createSlice({
  name: "a",
  initialState: initialStateA,
  reducers: {
    increment: (state) => {
      state.a = state.a + 1;
    },
  },
});

const { increment: incrementA } = sliceA.actions;
const selectA = (state: RootState) => state.a;
const reducerA = sliceA.reducer;

const initialStateB = { b: 0 };
const sliceB = createSlice({
  name: "b",
  initialState: initialStateB,
  reducers: {
    increment: (state) => {
      state.b = state.b + 1;
    },
  },
});
const { increment: incrementB } = sliceB.actions;
const selectB = (state: RootState) => state.b;
const reducerB = sliceB.reducer;

const store = configureStore({
  reducer: {
    a: reducerA,
    b: reducerB,
  },
});

type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = typeof store.dispatch;

const selectA1 = createSelector([selectA], (store) => store.a);

const selectResult = createSelector([selectA1, selectB], (a1, stateB) => {
  console.log("Output selector running");
  return a1 + stateB.b;
});

export function createSelectorExample() {
  store.dispatch(incrementA());

  store.dispatch(incrementB());
  store.dispatch(incrementB());

  const result = selectResult(store.getState());
  console.log(result);

  const secondResult = selectResult(store.getState());
  console.log(secondResult);
}
