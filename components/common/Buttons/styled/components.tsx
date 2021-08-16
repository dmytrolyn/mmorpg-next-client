import styled from 'styled-components';

export const ButtonGreen = styled.button`
    display: inline-block;
    text-decoration: none;
    line-height: 48px;

    transition: all 0.3s ease;
    cursor: pointer;
    background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/button.png`}) center no-repeat;
    height: 48px;
    width: 177px;
    border: none;
    color: #fff !important;
    text-shadow: 0px 2px 0px rgb(0 0 0 / 50%);
    box-shadow: 0px 0px 15px 0px rgb(90 183 0 / 40%);
    position: relative;
    z-index: 1;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Fritz';
    font-size: 16px;
    letter-spacing: 2px;

    &:hover {
        filter: brightness(120%);
    }
`;