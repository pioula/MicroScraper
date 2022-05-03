import React from 'react';
import styles from './styles/styles';

const Layout = (props: { children: any }) => {
    return (
        <>
            <header style={ styles.header }>
                <h1>MicroScraper</h1>
            </header>
            <main style={ styles.main }>{ props.children }</main>
        </>
    );
};
export default Layout;