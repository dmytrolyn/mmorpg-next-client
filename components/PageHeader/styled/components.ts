import styled from 'styled-components';

export const Hero = styled.div`
    background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/hero.png`}) no-repeat;
    width: 526px;
    height: 624px;
    position: absolute;
    right: -80px;
    top: 0px;
    z-index: 1;
`;