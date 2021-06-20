import React from 'react'
import { ErrorBoundary,MenuBar } from '@/components';
import { useLocation } from 'umi'; 

export default function BasicLayout(props) {

    const location=useLocation();

    const paths=['/','/order','/user'];

    return (
        <div>
            <MenuBar 
                show={paths.includes(location.pathname)}
                pathname={location.pathname}
            />
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        </div>
    )
}
