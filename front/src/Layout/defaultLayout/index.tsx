import React from 'react';
import styles from './styles/styles';

const Layout = (props: { children: any }) => {
    return (
        <>
            <div style={ styles.background }>
                <header style={ styles.header }>
                    <h1>MicroScraper</h1>
                </header>
                <main style={ styles.main }>{ props.children }</main>
            </div>
        </>
    );
};
export default Layout;