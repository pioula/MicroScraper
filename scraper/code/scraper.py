import praw
import data_sender as comm
from datetime import datetime


interesting_post_parameters = (
    'author', 'title', 'downs', 'ups', 'subreddit', 'url', 'created', 'selftext_html'
)


def init_reddit_instance():
    reddit_instance = praw.Reddit(
        client_id='6MkzuKozOa5zec13CM6H7A',
        client_secret='WDwKAUoQuRRYS_LRgUt2KF5rf5zgQA',
        user_agent='Micro Scrapper',
        redirect_url='http://localhost:8080'
    )
    return reddit_instance


# Post methods that need a little work
def get_author(post):
    return post.author.name


def get_subreddit(post):
    return post.subreddit.name


def get_date(post):
    post_timestamp = post.created_utc
    post_datetime = datetime.utcfromtimestamp(post_timestamp)\
                            .strftime('%Y-%m-%d %H:%M:%S')
    return post_datetime


# Simple functions that should be possible to code inline
def get_title(post):
    return post.title


def get_downs(post):
    return post.downs


def get_ups(post):
    return post.ups


def get_url(post):
    return post.url


def get_selftext_html(post):
    return post.seftext_html


def get_post_param(post, parameter):
    if interesting_post_parameters.count(parameter) == 0:
        raise NotImplementedError("Parsing of parameter: " + parameter +
                                  " is not implemented!")
    if parameter == 'author':
        return get_author(post)
    if parameter == 'subreddit':
        return get_subreddit(post)
    if parameter == 'created':
        return get_date(post)

    if parameter == 'title':
        return get_title(post)


def get_top_posts(reddit_instance):
    top_posts = reddit.subreddit('MachineLearning').top(limit=1)
    data_dict = dict()

    for post in top_posts:
        for param in interesting_post_parameters:
            data_dict[param] = get_post_param(post, param)

    comm.send_to_localhost(data_dict)


if __name__ == '__main__':
    reddit = init_reddit_instance()
