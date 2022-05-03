import { Link } from "react-router-dom";
import { html_post_t } from "~/services/post_t";
import useHeader from "./hooks/useHeader";
import styles from "./styles/styles";

const foo_post: html_post_t = {
    type: 'html',
    html: '',
    author: '',
    title: '',
    subreddit: '',
    ups: 0,
    permalink: '',
    created: ''
}

function Header() {
    const { user, onSignIn } = useHeader();

    return (
        <header style={ styles.header }>
            <div style={ styles.nav }>
                <Link to="/" style={ styles.link }><h1 style={ styles.logo }>MicroScraper</h1></Link>
                <div style={ styles.buttons }>
                    {
                        user ?
                            <Link to="/posts" style={ styles.link }>
                                <p style={{ marginBottom: 0, color: "#FFFFFF" }}>Posts</p>    
                            </Link> :
                            <div />
                    }
                </div>
            </div>
            <div style={ styles.buttons }>
                {
                    user ?
                        <p style={{ marginBottom: 0 }}>Welcome { user }!</p> :
                        <p style={{ marginBottom: 0 }} onClick={ onSignIn }>Sign In</p>
                }
            </div>
        </header>
    );
}

export default Header;