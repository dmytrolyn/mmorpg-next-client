import { getBossTimeString } from '../../../../utils/bossTimer';
import { FactionIcon, GuildFactionIcon, ClassIcon, RankIcon } from '../styled/components'; 

type KeysReplace = {
    [key: string]: string
}

export const trKeys: KeysReplace = {
    index: "№", CharName: "Name", Family: "Faction", Job: "Class", GuildName: "Guild", MasterName: "Creator", 
    K1: "Kills", K2: "Deaths", CreateDate: "Created at", GuildPoint: "Scores", TotalCount: "Members",
    Country: "faction", MobName: "Boss", TimeLeft: "Time left", MapID: "Map", DeleteDate: "Deleted at", JoinDate: "Created at",
    ItemName: "Item"
};

export const ranks: Array<string> = [
    "500px 500px", "0 0", "0 -32px", "0 -64px", "0 -96px", "0 -128px", "0 -160px", "0 -192px", "0 -224px", "0 -256px", "0 -288px",
    "0 -320px", "0 -352px", "0 -384px", "0 -416px", "0 -448px", "0 -480px", "-32px 0px", "-32px -32px", "-32px -64px",
    "-32px -96px", "-32px -128px", "-32px -160px", "-32px -192px", "-32px -224px", "-32px -256px", "-32px -288px", "-32px -320px", "-32px -352px",
    "-32px -384px", "-32px -416px", "-32px -448px"
]

const createDate = (date: string) : string => {
    let dateString = new Date(date).toLocaleString();
    return dateString.split(' ').slice(0, 5).join(' ');
}

const trValue = (key: string, val: number | string) => {
    switch(key) {
        case "Family": return FactionIcon(val as number);
        case "Country": return GuildFactionIcon(val as number);
        case "Job": return ClassIcon(val as number);
        case "Rank": return <RankIcon index={val as number} />;
        case "CreateDate":
        case "JoinDate":
        case "Date":
        case "Time":
        case "DeleteDate": return createDate(val as string);
        case "TimeLeft": {
            return getBossTimeString(val as number);
        }
        default: return val;
    }
}

export const transformValues = (item: any) =>
    Object.keys(item).map((key) => {
        return trValue(key, item[key]);
    });