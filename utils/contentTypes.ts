export type RankItemSchema = {
    CharName: string,
    Family: number,
    Job: number,
    Level: number,
    GuildName: string | null,
    K1: number,
    K2: number
}

export type GuildItemSchema = {
    GuildName: string,
    MasterName: string, 
    CreateDate: string, 
    Country: number, 
    TotalCount: number, 
    GuildPoint: number
}

export type BossRespawnSchema = {
    MobName: string,
    Killer: string,
    MapID: string,
    Respawn: number,
    TimeLeft: number    
}

export type UserSchema = {
    UserUID: number
    UserID: string
    JoinDate: string
    Status: number
    Leave: number
    LeaveDate: string
    UserIp: string
    Point: number
}

export type ShopItemSchema = {
    RowID: number
    Title: string
    Description: string
    Category: string
    Count: number
    Price: number
    Image: string
    Icon: string
}

export type CharItemSchema = {
    CharName: string
    CharID: number
    Family: number
    Job: number
    Level: number
    DeleteDate: string 
    JoinDate: string
}

export type RankRewardSchema = {
    Rank: number
    Points: number
    Count: number
    Item: string
}

export type NewsItemSchema = {
    RowID: number
    Title: string
    Category: number
    Image: string
    Text: string
    Date: string
    Del: number
}

export type DonateItemSchema = {
    RowID: number
    Count: number
    Price: number
    Bonus: number
}

export type SpenderItem = {
    RowID: number
    TieredSpenderLevel: number
    Count: number
    Img: string
    Text: string
    ItemName: string
}

export type SpenderSchema = {
    RowID: number
    Title: string
    Stages: number
    StartDate: string
    EndDate: string
    Level1: number | null
    Level2: number | null
    Level3: number | null
    Level4: number | null
    Level5: number | null
    Level6: number | null
    Level7: number | null
    Level8: number | null
    Level9: number | null
    Level10: number | null
    Del: number
    items: Array<SpenderItem>
    status: number
    received: Array<number>
}
