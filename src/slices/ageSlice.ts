import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ageState {
  value: number
}

const initialState: ageState = {
  value: 0,
}

export const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    setAge: (state,value) => {
      state.value = value.payload;
    },
  },
})

export const { setAge } = ageSlice.actions
export const valueAge = (state: RootState) => state.age.value

export default ageSlice.reducer