import styled from 'styled-components';
import { ContentWrap } from '../../common/styled/components';

export const FooterContentWrap = styled(ContentWrap)`
    &::after {
        content: "";
        position: absolute;
        background: url(${`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/footerHero.png`}) no-repeat;
        width: 414px;
        height: 511px;
        right: -20px;
        top: -150px;
        z-index: 1;
    }
`;