import { Carousel } from 'react-bootstrap';

import { media_post_t, image_t, gif_t, mp4_t } from '~/services/post_t';

function MediaPost(props: { post: media_post_t }) {
    return (
        <Carousel>
            {
                props.post.medias.map((media) => {
                    if (media.type === "image_t")
                        return <Carousel.Item>
                            <img
                                src= { media.image }
                                alt="Media Image"
                            />
                        </Carousel.Item>
                    else if (media.type === "gif_t")
                        return <Carousel.Item>
                            <img
                                src= { media.gif }
                                alt="Media gif"
                            />
                        </Carousel.Item>
                    else if (media.type === "mp4_t")
                        return <Carousel.Item>
                            <video controls>
                                <source src={ media.mp4 } type="video/mp4"></source>
                                Unable to play media video
                            </video>
                        </Carousel.Item>
                })
            }
        </Carousel>
    )
}

export default MediaPost;