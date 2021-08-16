import React from 'react';
import { LoadingLayout } from './styled/components';
import Loading from './Loading';

interface LayoutProps {
    show: boolean,
    withLoading: boolean,
    cn: string
}

export const Layout = ({ show, withLoading = true, cn }: LayoutProps) => { 
    return (
        <LoadingLayout show={show}>
            <Loading className={cn} show={withLoading} />
        </LoadingLayout>
    )
}