# Post content description

## Basic post structure:
- author : string
- title : string
- subreddit : string
- ups : number (of upvotes)
- permalink : href (link to the post)
- created date: 'Y-m-d H:M:S' (string)

## Post types and custom contents:
### type = 'html'
- html - html text
### type = 'media'
- media - Either a link to a video or array of media contents:
Each array element is of the following form:
- 'type' : 'url'
Where type could be, but is not limited to:
- 'image', 'gif', 'mp4' etc.
### type = 'media_gallery'
- media_gallery : array of gallery_images
Gallery image contains following information:
- 'x' : number, 'y' : number - resolution
- 'src' : href to the source image
### type = 'misc'
Various other, less popular, types of posts, such as post of the following form:
'Title'
'Comments'
It is recommended to disregard such posts.
