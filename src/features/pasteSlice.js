import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")  // ✅ KEY FIXED: "pastes" not "paste"
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,

  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));  // ✅ KEY CONSISTENT
      toast.success("Paste Created Successfully");
    },

    updateToPaste: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(paste => paste._id === updatedPaste._id);

      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated");
      } else {
        toast.error("Paste not found");
      }
    },

    resetAllPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("All pastes cleared");
    },

    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      const updatedPastes = state.pastes.filter(paste => paste._id !== pasteId);

      if (updatedPastes.length === state.pastes.length) {
        toast.error("Paste not found");
        return;
      }

      state.pastes = updatedPastes;
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste removed");
    },
  },
});

export const {addToPaste,updateToPaste,resetAllPaste,removeFromPaste,} = pasteSlice.actions;

export default pasteSlice.reducer;
