import styled from 'styled-components';

export const GameCenterWrap = styled.div`
    background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/gameblock-bg.jpg`}) center bottom no-repeat;
    background-color: #0f0e0c;

    > div {
        padding: 80px 0px 50px 0px;
    }
`;