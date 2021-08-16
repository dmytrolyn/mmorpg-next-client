import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, DispatchType } from '.';

export const useTypedDispatch = () => useDispatch<DispatchType>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;