import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel

class UserLogin(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="Username Field cannot be blank"
    )

    parser.add_argument('password',
        type=str,
        required=True,
        help="Password Field cannot be blank"
    )

    def post(self):
        data = UserLogin.parser.parse_args() #adds constraints to data

        if UserModel.find_by_username_and_password(data['username'], data['password']):
            return {
              'message': 'User Logged in successfully',
              'logged_in': True,
              'username': data['username']
            }
        else:
            return {
              'message': 'You have entered an incorrect password or username',
              'logged_in': False
            }

    def get(self):
        return {'user' : [ user.json() for user in UserModel.query.all() ]}
