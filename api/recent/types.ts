import { RankItemSchema, GuildItemSchema, BossRespawnSchema } from 'utils/contentTypes';
import { TableResponse } from '../types';

export type PlayersResponse = TableResponse<RankItemSchema>

export type GuildsResponse = TableResponse<GuildItemSchema>

export type BossesResponse = TableResponse<BossRespawnSchema>

export interface OnlineResponse {
    online: number,
    aol: number,
    uof: number
}

