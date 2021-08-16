import styled from 'styled-components';
import { colors } from '../utils/typesColors';

const SocialLink = styled.a`
    width: calc(50% - 13px);
    height: 135px;
    position: relative;
    padding-left: 125px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: 0.6s;
    color: #fff;

    display: flex;
    align-items: center;

    &::before {
        content: "";
        width: 54px;
        position: absolute;
        top: 50%;
        left: 50px;
    }

    p {
        font-size: 30px;
        font-family: "Fritz";
        margin-bottom: 8px;
    }

    span {
        font-size: 13px;
    }

    &:hover {
        background-size: 110%;
        color: #ffb432;
    }
`;

export const DiscordLink = styled(SocialLink)`
    background-image: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/disc-button.jpg`});

    &::before {
        background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/discord-icon.png`}) no-repeat;
        height: 42px;
        margin-top: -21px;
    }
`;

export const YoutubeLink = styled(SocialLink)`
    background-image: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/youtube-button.jpg`});

    &::before {
        background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/youtube-icon.png`}) no-repeat;
        height: 38px;
        margin-top: -19px;
    }
`;

type NewsType = {
    type: string
}

export const NewsType = styled.span<NewsType>`
    display: block;

    font-size: 12px;
    margin-right: 12px;
    text-transform: lowercase;

    color: ${props => colors[props.type]};
`;