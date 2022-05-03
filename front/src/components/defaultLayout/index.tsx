import Header from '../Header';
import styles from './styles/styles';

const Layout = (props: { children: any }) => {
    return (
        <>
            <Header />
            <main style={ styles.main }>{ props.children }</main>
        </>
    );
};
export default Layout;