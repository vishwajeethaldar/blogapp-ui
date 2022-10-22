import {useSelector, useDispatch} from 'react-redux'
import { AppDispatch, RootState } from '../store'
import {TypedUseSelectorHook} from 'react-redux'

export const useAppdispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
