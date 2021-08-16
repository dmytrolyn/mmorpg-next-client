import styled from 'styled-components';
import { Swiper as SwiperComponent } from 'swiper/react';

export const Swiper = styled(SwiperComponent)`
    .swiper-button-prev {
        top: 84%;
        left: 75%;
        transform: scale(0.3);
        z-index: 20;
        &::after {
            color: #fff;
        }
    }

    .swiper-button-next {
        top: 84%;
        left: 88%;
        transform: scale(0.3);
        z-index: 20;
        &::after {
            color: #fff;
        }
    }

    .swiper-pagination {
        width: 110px;
        height: 40px;
        background: rgba(0, 0, 0, 0.8);
        position: absolute;
        z-index: 15;
        color: #fff;
        font-family: "Fritz";

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-pagination-fraction {
        bottom: 40px;
        left: 75%;
    }

    .swiper-pagination-total {
        padding-left: 1px;
    }   

    .swiper-pagination-current {
        color: #ffb432;
        letter-spacing: 1px;
    }
`;

