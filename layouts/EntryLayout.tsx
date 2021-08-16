import MainHeader from '../components/MainHeader';
import { MainBg } from '../components/common/styled/components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { ReactNode } from 'react';

export default function EntryLayout({ children }: { children: ReactNode }) {
    return (
        <MainBg>
            <Navbar />
            <MainHeader />
            {children}
            <Footer />
            <ScrollTop />
        </MainBg>
    )
}