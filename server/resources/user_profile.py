import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel
from models.jobs import JobsModel


class UserProfile(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="Username Field cannot be blank"
    )

    parser.add_argument('profile_picture',
        type=str,
        required=False,
        help="Username Field cannot be blank"
    )

    def put(self, username):
        data = Userdata.parser.parse_args()

        user = UserModel.find_by_username(username)

        if user:
            user.profile_picture = data['profile_picture']
        else:
            return {'message': 'user {} could not be found'.format(username)}

        user.save_to_db()

        return user.json()
