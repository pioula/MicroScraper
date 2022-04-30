import praw


def initRedditInstance():
    reddit = praw.Reddit(client_id='6MkzuKozOa5zec13CM6H7A',
                         client_secret='WDwKAUoQuRRYS_LRgUt2KF5rf5zgQA', user_agent='Micro Scrapper')
    return reddit


def getHotPosts(reddit):
    hot_posts = reddit.subreddit('MachineLearning').hot(limit=10)
    for post in hot_posts:
        print(post.title)


if __name__ == '__main__':
    reddit = initRedditInstance()
    getHotPosts(reddit)
