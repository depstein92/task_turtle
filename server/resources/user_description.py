import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel
from models.jobs import JobsModel


class UserDescription(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="Username Field cannot be blank"
    )

    parser.add_argument('description',
        type=str,
        required=False,
        help="Description Field cannot be blank"
    )

    def put(self, username):
        data = UserDescription.parser.parse_args()

        user = UserModel.find_by_username(data['username'])

        if user:
            user.description = data['description']
        else:
            return {'message': 'user {} could not be found'.format(username)}

        user.save_to_db()

        return user.json()
