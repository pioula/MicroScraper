import { useContext, useState } from 'react';
import AuthContext from '~/contexts/authContext';
import styles from './styles/styles';

const Layout = (props: { children: any }) => {
    const [user, setUser] = useState<string | null>(null);
    const googleAuth = useContext(AuthContext);


    function onSignIn() {
        googleAuth.signInUser()
            .then((res) => setUser(res));
    }

    return (
        <>
            <header style={ styles.header }>
                <h1>MicroScraper</h1>
                <div style={ styles.signInButton }>
                    {
                        user ?
                            <p style={{ marginBottom: 0 }}>Welcome { user }</p> :
                            <p style={{ marginBottom: 0 }} onClick={ onSignIn }>Sign In</p>
                    }
                </div>
            </header>
            <main style={ styles.main }>{ props.children }</main>
        </>
    );
};
export default Layout;