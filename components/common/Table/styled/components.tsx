import styled from 'styled-components';
import TableSize, * as Sizes from '../utils/sizes';
import { ranks } from '../utils';
import { classes, factions, guildFactions } from '../utils/links';

interface TableProps {
    size: TableSize
}

type TDPadding = {
    [key in TableSize]: string;
};

const tdPadding : TDPadding = {
    [Sizes.BIG]: '22px 30px',
    [Sizes.COMMON]: '12px 23px'
}

export const TableWrap = styled.div`
    width: 100%;

    padding: 20px 0 50px 0;
`;

export const Table = styled.table<TableProps>`
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;

    text-align: center;

    td, th {
        border-collapse: collapse;
        padding: ${({ size }) => tdPadding[size]};
        vertical-align: middle;
        color: #cab7b7;
    }
`;

export const TableHead = styled.thead`
    th {
        background-color: #1b1918;
        font-family: 'Fritz';
        color: #908585;
        font-size: 15px;

        text-transform: uppercase;
    }
`;

export const TableBody = styled.tbody`
    tr:nth-child(odd) {
        background: #13110f;
    }

    tr:nth-child(even) {
        background: #0d0c0a;
    }

    tr:hover {
        background: #211d1a;
    }

    td {
        font-size: 16px;
    }
`;

const Icon = styled.img`
    display: block;
    margin: auto;
`;

const SmallIcon = styled(Icon)`
    width: 30px;
    height: 30px;
`;

const BigIcon = styled(Icon)`
    width: 40px;
    height: 40px;
`;

const MediumIcon = styled(Icon)`
    width: 35px;
    height: 35px;
`;

type RankProps = {
    index: number
};

export const RankIcon = styled.div<RankProps>`
    background-image: url(${`${process.env.NEXT_PUBLIC_STATIC_ICONS}/ranks/grades.png`});
    background-repeat: no-repeat;
    background-position: ${(props) => ranks[props.index]};
    width: 27px;
    height: 16px;
    margin: auto;
`;

export const ClassIcon = (c: number) => <SmallIcon src={classes[c]} alt="icon" />;

export const FactionIcon = (f: number) => <MediumIcon src={factions[f]} alt="icon" />;

export const GuildFactionIcon = (f: number) => <MediumIcon src={guildFactions[f]} alt="icon" />;