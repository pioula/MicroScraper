import praw
import pprint


def initRedditInstance():
    reddit = praw.Reddit(client_id='6MkzuKozOa5zec13CM6H7A',
                         client_secret='WDwKAUoQuRRYS_LRgUt2KF5rf5zgQA',
                         user_agent='Micro Scrapper',
                         redirect_url='http://localhost:8080')
    return reddit


def getHotPosts(reddit):
    hot_posts = reddit.subreddit('MachineLearning').rising(limit=10)
    for post in hot_posts:
        print(str(post.score) + " " + post.title + " name: " + post.author.name)
        #pprint.pprint(vars(post))
        print("\n\n")


if __name__ == '__main__':
    reddit = initRedditInstance()
    getHotPosts(reddit)
