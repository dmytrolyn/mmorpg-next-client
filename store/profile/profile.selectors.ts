import { AppState } from 'store';

export const getInfo = (state: AppState) => state.profile.info;
export const getRewards = (state: AppState) => state.profile.rewards;
export const getChars = (state: AppState) => state.profile.resurrection;
export const getSpenders = (state: AppState) => state.profile.spenders;
export const getRoulette = (state: AppState) => state.profile.roulette;