import sqlite3
from flask_restful import Resource, reqparse
from models.posts import PostsModel


class PostsResources(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('client',
        type=str,
        required=True,
        help="Client cannot be blank"
    )

    parser.add_argument('title',
        type=str,
        required=True,
        help="Title cannot be blank"
    )

    parser.add_argument('time',
        type=str,
        required=True,
        help="Time cannot be blank"
    )

    parser.add_argument('date',
        type=str,
        required=True,
        help="Date cannot be blank"
    )


    def get(self):

        data = PostsResources.parser.parse_args()
        post_found = PostsModel.find_by_date_time_title_and_client(data['date'],data['time'],data['client'],data['title'])

        if not post_found:
            return{
             'Message': 'Post not Found'
            }
        else:

            return {
                'posts' : [
                   post.json() for post in PostsModel.find_by_date_time_title_and_client(data['date'],data['time'],data['client'],data['title'])
                ]
            }
