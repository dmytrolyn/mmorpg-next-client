import styled from 'styled-components';
import { ReactNode } from 'react';

export const MainBg = styled.div`
    width: 100%;

    background-image: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/bg.jpg`});
    background-position: center top;
    background-repeat: no-repeat;
`;

export const PageBg = styled.div`
    width: 100%;

    background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/pages-bg.jpg`}) top center no-repeat;
    background-color: #0d0c0a;
`;

export const PageBottomBg = styled.div`
    min-height: 730px;
    background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/gameblock-bg.jpg`}) bottom center no-repeat;
`;

export const ContentWrap = styled.div`
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    line-height: 1.4;
`;

export const ContentTitleWrap = styled.h2`
    font-weight: normal;
    margin-bottom: 0px;
    font-size: 18px;
    color: #fff;
    font-family: 'Fritz';
    text-transform: uppercase;
    position: relative;
    margin: 20px 0px;
    z-index: 6;

    span { 
        display: inline-block;
        background: url(${`${process.env.NEXT_PUBLIC_STATIC_ICONS}/title-icon.png`}) left no-repeat;
        background-color: rgb(13, 12, 10);
        padding: 10px 20px 10px 40px;
        letter-spacing: 2px;
        position: relative;
        z-index: 2;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        top: 50%;
        left: 0;
        background: rgba(255, 255, 255, 0.1);
        z-index: -1;
    }
`;

export const ContentTitle = ({ children } : { children: ReactNode }) => {
    return (
        <ContentTitleWrap>
            <span>{children}</span>
        </ContentTitleWrap>
    )
}