import { createSlice } from '@reduxjs/toolkit'
import ProperyResponse from '../services/types/property-response.type';
type State = {
  property?: ProperyResponse;
}

const initialState: State = {
}

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    saveProperty: (state, action: {payload: ProperyResponse}) => {
      return {
        ...state,
        property: action.payload
      };
    }
  }
})

const { actions, reducer } = propertySlice;

export const { saveProperty } = actions;
export default reducer;