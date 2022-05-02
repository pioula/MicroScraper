import post_t, { media_post_t } from '~/services/post_t';

import HtmlPost from './components/HtmlPost';
import MediaPost from './components/MediaPost';

import { html_post_t } from '~/services/post_t';
import styles from './styles/styles';
import { Col, Container, Row } from 'react-bootstrap';

function Post(props: { post: post_t }) {
    return (
        <Container>
            <Row style={ styles.post_shadow }>
                <Col style={ styles.post_aside } md="auto" >
                    <div>
                        <p>{ props.post.ups }</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <p style={{ ...styles.post_info, ...styles.subreddit_name }} >{ props.post.subreddit }</p>
                        <p style={{ ...styles.post_info, ...styles.additional_info }} >{ props.post.author }</p>
                        <p style={{ ...styles.post_info, ...styles.additional_info }} >{ props.post.created }</p>
                    </div>
                    <h1 style={ styles.post_title }>{ props.post.title }</h1>
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