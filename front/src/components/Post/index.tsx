import post_t, { media_post_t } from '~/services/post_t';

import { Col, Container, Row } from 'react-bootstrap';

import HtmlPost from './components/HtmlPost';
import MediaPost from './components/MediaPost';

import usePost from '~/hooks/usePost';

import { html_post_t } from '~/services/post_t';

import styles from './styles/styles';
import { useContext, useEffect } from 'react';
import UserContext from '~/contexts/userContext';


function Post(props: { post: post_t }) {
    const { containsPost, convertUps } = usePost();

    const userContext = useContext(UserContext);

    return (
        <Container>
            <Row style={ styles.post_box }>
                <Col style={ styles.aside } xs={1}>
                    <div>
                        {
                            (userContext.auth.currentUser && !containsPost(userContext.usersPosts, props.post)) ? 
                            <p style={{ ...styles.aside_element, fontSize: 35 }}>+</p> :
                            <div />  
                        }
                        <p style={{ ...styles.aside_element, fontSize: 35 }}>⇧</p>
                        <p style={ styles.aside_element }>{ convertUps(props.post.ups) }</p>
                        <p style={{ ...styles.aside_element, fontSize: 35 }}>⇩</p>
                    </div>
                </Col>
                <Col style={ styles.article_background }>
                    <div>
                        <p style={{ ...styles.article_info, ...styles.subreddit_name }} >{ `r/${props.post.subreddit}` }</p>
                        <p style={{ ...styles.article_info, ...styles.additional_article_info }} >{ `u/${props.post.author}` }</p>
                        <p style={{ ...styles.article_info, ...styles.additional_article_info }} >{ props.post.created }</p>
                    </div>
                    <h1 style={ styles.article_title }>{ props.post.title }</h1>
                    <div>
                        { (props.post.type === 'html') ? 
                        <HtmlPost post={ props.post as html_post_t } /> :
                        <MediaPost post={ props.post as media_post_t } /> }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Post;