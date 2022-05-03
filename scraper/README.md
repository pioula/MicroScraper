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
- media - array of media source links
### type = 'misc'
Various other, less popular, types of posts, such as post of the following form:
'Title'
'Comments'
It is recommended to disregard such posts.
