import ApiInstance from '../';
import * as Response from './types'

class PagesAPI extends ApiInstance {

    constructor() {
        super('/');
    }

    getRankList = () => this.instance.get<Response.Ranks>('/ranks').then(res => res.data);

    getGuildsList = () => this.instance.get<Response.Guilds>('/guilds').then(res => res.data);
    
    getPlayersCount = () => this.instance.get<Response.Count>('/ranks/count').then(res => res.data[0]);

    getGuildsCount = () => this.instance.get<Response.Count>('/guilds/count').then(res => res.data[0]);

    getNews = () => this.instance.get<Response.News>('/news').then(res => res.data);

    getDonate = () => this.instance.get<Response.Donate>('/donate').then(res => res.data);
}

const PagesAPIService = new PagesAPI();

export default PagesAPIService;