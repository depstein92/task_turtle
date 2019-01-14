import sqlite3
from flask_restful import Resource, reqparse
from models.posts import PostsModel


class PostsRegister(Resource):

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

    parser.add_argument('decription',
        type=str,
        required=True,
        help="Description Field cannot be blank"
    )

    parser.add_argument('location',
        type=str,
        required=True,
        help="Location Field cannot be blank"
    )

    parser.add_argument('date',
        type=str,
        required=True,
        help="Date Field cannot be blank"
    )

    def post(self):

        data = PostsRegister.parser.parse_args()

        post = PostsModel(**data)

        post.save_to_db()

        return { "message": "Post added"}

    def get(self):
        return {'posts' : [ post.json() for post in PostsModel.query.all() ]}     
