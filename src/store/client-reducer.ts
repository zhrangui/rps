import { createSlice } from '@reduxjs/toolkit'
import { Financing } from '../services/types/property-attributes.type';
import { Address } from '../services/types/property-request.type';
import { PropertyStyle } from '../services/types/property-response.type';

interface State {
  address: Address,
  originalValue: string,
  originalDate: Date | null
  propertyStyle: PropertyStyle,
  financing?: Financing,
  numMonthsTrend: number,
  renovationChecked: boolean,
  renovationType: string,
  renovationAmount: string,
  renovationDate: Date | null
}

const initialState: State = {
  address: {
    unitNumber: '',
    streetNumber: '',
    streetName: '',
    streetType: '',
    streetDirection: '',
    city: '',
    province: '',
    postalCode: '',
    fullAddress: ''
  },
  originalValue: '',
  originalDate: null,
  propertyStyle: 0,
  numMonthsTrend: 60,
  renovationChecked: false,
  renovationType: '',
  renovationAmount: '',
  renovationDate: null
}

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    saveAddress: (state, action: { payload: Address }) => {
      return {
        ...state,
        address: action.payload
      };
    },
    updateClient: (state, action: { payload: {} }) => {
      return {
        ...state,
        ...action.payload
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

export const { saveAddress, updateClient, resetClient } = actions;
export default reducer;