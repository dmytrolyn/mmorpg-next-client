import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppState, DispatchType } from './';

export const useTypedDispatch = () => useDispatch<DispatchType>()
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;