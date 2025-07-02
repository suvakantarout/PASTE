import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes:localStorage.getItem("paste")
  ? JSON.parse(localStorage.getItem("paste"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,

  reducers: {
    addToPaste: (state,action) => {
    //   state.value += 1
    },
    updateToPaste: (state,action) => {
    //   state.value -= 1
    },
    resetAllPaste: (state,action) => {

    },
    removeFromPaste: (state,action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer