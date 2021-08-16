import ApiInstance from '../';
import * as Response from './types'
import { BasicResponse } from 'api/types'

class ProfileAPI extends ApiInstance {

    constructor() {
        super('/profile');
    }
    
    getFullUserRequest = () => this.instance.get<Response.GetUser>('/user').then(resp => resp.data);

    getAllUserChars = () => this.instance.get<Response.GetAllChars>('/resurrect').then(resp => resp.data);

    makeResurrectRequest = (payload: { CharID: number }) => this.instance.post<Response.ManageChar>('/resurrect', payload).then(resp => resp.data);

    makeDeleteCharRequest = (payload: { CharID: number }) => this.instance.post<Response.ManageChar>('/delete', payload).then(resp => resp.data);

    getRanksRewards = () => this.instance.get<Response.GetRankRewards>('/rewards').then(resp => resp.data);

    getRankRewardRequest = (payload: { rank: number }) => this.instance.post<BasicResponse>('/reward', payload).then(resp => resp.data);

    getActiveSpenders = () => this.instance.get<Response.GetSpenders>('/spenders').then(resp => resp.data);

    getSpenderReward = (payload: { SpenderID: number, Level: number, RowID: number }) => this.instance.post<BasicResponse>('/spender', payload).then(resp => resp.data);

    getRouletteItems = () => this.instance.get<Response.GetRoulette>('/roulette').then(resp => resp.data);

    getRouletteReward = () => this.instance.post<Response.GetRouletteReward>('/roulette').then(resp => resp.data);

    getPromotionRewardRequest = (payload: { code: string }) => this.instance.post<BasicResponse>('/promo', payload).then(resp => resp.data);
}

const ProfileAPIService = new ProfileAPI();

export default ProfileAPIService;