import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Expense } from '../sharedTypes'

interface InitialState {
    items: Expense[]
}

const initialState: InitialState = {
    items: []
}

export const counterSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    recordExpense: (state, action: PayloadAction<Expense>): void => {
      state.items.push(action.payload)
    },
  },
})

export const { recordExpense } = counterSlice.actions

export default counterSlice.reducer