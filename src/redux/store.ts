import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import expenses from './expenses'

const store = configureStore({
  reducer: expenses,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;