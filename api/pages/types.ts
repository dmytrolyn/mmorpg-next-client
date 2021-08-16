import { TableResponse } from '../types'
import { RankItemSchema, GuildItemSchema, NewsItemSchema, DonateItemSchema } from 'utils/contentTypes'

export type Ranks = TableResponse<RankItemSchema>

export type Guilds = TableResponse<GuildItemSchema>

export type Count = Array<{ Count: number }>

export type News = Array<NewsItemSchema>

export type Donate = Array<DonateItemSchema>