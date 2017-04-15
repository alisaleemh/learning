#
# Database access functions for the web forum.
#

import time
import psycopg2

# Dict to store db specific parameters
def ConnectDb():
    db_params = {
                'dbname': 'forum',
                'dbuser': 'alisaleemh'
                }
    # Database connection
    try:
        db = psycopg2.connect("dbname=%s" % db_params['dbname'])
        print 'Connected to %s' % db_params['dbname']
        return db
    except:
        print "Error, could not connect to the database"
        return


# Get posts from database.
def GetAllPosts():
    """Get all the posts from the database, sorted with the newest first.

    Returns:
      A list of dictionaries, where each dictionary has a 'content' key
      pointing to the post content, and 'time' key pointing to the time
      it was posted.
    """
    db = ConnectDb()
    cur = db.cursor()
    cur.execute("SELECT content,time FROM POSTS ORDER BY TIME ASC")

    posts = ({
            'content': str(row[0]),
            'time': str(row[1])
            } for row in cur.fetchall())
    db.close()
    if posts:
        return posts
    else:
        return


# Add a post to the database.
def AddPost(content):
    '''Add a new post to the database.

    Args:
      content: The text content of the new post.
    '''
    db = ConnectDb()
    cur = db.cursor()

    try:
        cur.execute("INSERT INTO POSTS  (content) VALUES ('%s')" % (content,))
    except:
        print "Failed to insert"

    try:
        db.commit()
    except:
        print "Failed to commit"
        db.rollback()
    db.close()
