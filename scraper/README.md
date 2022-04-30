# Uwagi:

## Autoryzacja

Należałoby dodać OAuth autoryzację, info pod linkiem:
https://praw.readthedocs.io/en/latest/getting_started/authentication.html

## Co można scrapować:
- 'author': Redditor(name='The_Depressed_One1'),
- 'title': "I don't know how it is in your country, but here it has already "
          'started',
- 'created_utc': 1651327344.0, (lub created, nwm czym się różni)
- 'downs': 0,
- 'ups': 17,
- 'upvote_ratio': 0.95,
- 'score': 17,
- 'subreddit': Subreddit(display_name='dankmemes'),
- 'url': 'https://i.redd.it/wf4ncnphaow81.jpg',
- 'post_hint': 'image',
- 'preview': {'enabled': True,
             'images': [{'source': {'height': 1068,
                                    'url': 'https://preview.redd.it/wf4ncnphaow81.jpg?auto=webp&s=fa0fed3ffebbc853ba36ba17ccb786fcd6b140b6',
                                    'width': 1080}}]}
- 'selftext': 'sampletextsampletext' / link
- 'over_18': False,
- 'num_comments': 3,

## Co trzeba scrapować
- Autor
- title
- downs
- ups
- subreddit
- url
- selftext / link
- created_utc