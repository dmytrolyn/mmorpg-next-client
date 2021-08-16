import PageHeader from '../components/PageHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import { PageBg, PageBottomBg } from '../components/common/styled/components';
import { ContentWrap } from '../components/common/styled/components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { ReactNode } from 'react';

export default function BasicLayout({ children } : { children: ReactNode }) {
    return (
        <PageBg>
            <Navbar />
            <ContentWrap>
                <PageHeader />
                <Breadcrumbs />
            </ContentWrap>
            <PageBottomBg>
                {children}
            </PageBottomBg>
            <Footer />
            <ScrollTop />
        </PageBg>
    )
}