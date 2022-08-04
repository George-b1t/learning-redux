import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface nameState {
  value: string
}

const initialState: nameState = {
  value: "",
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state,value) => {
      state.value = value.payload;
    },
  },
})

export const { setName } = nameSlice.actions
export const valueName = (state: RootState) => state.name.value

export default nameSlice.reducer