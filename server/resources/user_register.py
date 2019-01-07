import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel

class UserRegister(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="This Field cannot be blank"
    )

    parser.add_argument('password',
        type=str,
        required=True,
        help="This Field cannot be blank"
    )

    def post(self):
        data = UserRegister.parser.parse_args() #adds constraints to data

        if UserModel.find_by_username(data['username']):
           return {'message': 'user exists already'}

        user = UserModel(**data)
        # for each value on data insert data
        #this is because of dataparser
        #Equally we could have put UserModel(data['username'], data['password'])

        user.save_to_db()

        return { "message": "You have been registered"}

    def get(self):
        return {'user' : [ user.json() for user in UserModel.query.all() ]}
