import { createSlice } from '@reduxjs/toolkit'

interface State {
  dashboard: any
}

const initialState: State = {
  dashboard: {}
}

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    saveDashboard: (state, action: { payload: any }) => {
      return {
        ...state,
        dashboard: action.payload
      };
    },
    resetClient: (state) => {
      return {
        ...state,
        ...initialState
      };
    }
  }
})

const { actions, reducer } = clientSlice;

export const { saveDashboard, resetClient } = actions;
export default reducer;