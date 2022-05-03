import { Carousel } from 'react-bootstrap';

import { media_post_t } from '~/services/post_t';

function MediaImage(props: { image: string }) {
    return (
        <img
            src= { props.image }
            alt="Media Image"
            style={{maxWidth: '100%'}}
        />
    );
}

function MediaPost(props: { post: media_post_t }) {
    return (
        <>
            {
                props.post.media.length === 1 ?
                    <MediaImage image={ props.post.media[0] } /> :
                    (<Carousel>
                        {
                            props.post.media.map((media, ind) =>
                                <Carousel.Item key={ind}>
                                    <MediaImage image={ media } />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>)
            }
        </>
    )
}

export default MediaPost;