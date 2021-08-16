import ApiInstance from '../';
import { PlayersResponse, GuildsResponse, BossesResponse, OnlineResponse } from './types';

class RecentAPI extends ApiInstance {

    constructor() {
        super('/recent');
    }

    getTop10Killers = () => this.instance.get<PlayersResponse>('/players').then(res => res.data);

    getTop10Guilds = () => this.instance.get<GuildsResponse>('/guilds').then(res => res.data);

    getOnline = () => this.instance.get<OnlineResponse>('/online').then(res => res.data);

    getBossRespawns = () => this.instance.get<BossesResponse>('/bosses').then(res => res.data);
}

const RecentAPIService = new RecentAPI();

export default RecentAPIService;