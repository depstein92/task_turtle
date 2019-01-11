import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel
from models.jobs import JobsModel

class UserData(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="Username Field cannot be blank"
    )

    parser.add_argument('profile_picture',
        type=str,
        required=False,
        help="Profile Picture Field cannot be blank"
    )

    def get(self):
        data = UserData.parser.parse_args()
        user = UserModel

        if JobsModel.find_job_by_username(data['username']):
            jobs = [ job.json() for job in JobsModel.query.filter_by(username=data['username'])]
            user_data = [ user.json() for user in UserModel.query.filter_by(username=data['username']) ]
            return {
            'jobs' : jobs,
            'user_data': user_data
            }
        else:
            return {'message': 'no available jobs found'}

    def put(self):
        data = UserData.parser.parse_args()

        user = UserModel.find_by_username(data['username'])

        if user:
            user.profile_picture = data['profile_picture']
        else:
            return {'message': 'user {} could not be found'.format(data['username'])}

        user.save_to_db()

        return user.json()



# class UserProfile(Resource):
#
#     parser = reqparse.RequestParser()
#
#     parser.add_argument('username',
#         type=str,
#         required=True,
#         help="Username Field cannot be blank"
#     )
#
#     parser.add_argument('profile_picture',
#         type=str,
#         required=False,
#         help="Username Field cannot be blank"
#     )
#
#     def put(self):
#         data = Userdata.parser.parse_args()
#
#         user = UserModel.find_by_username(data['username'])
#
#         if user:
#             user.profile_picture = data['profile_picture']
#         else:
#             return {'message': 'user {} could not be found'.format(username)}
#
#         user.save_to_db()
#
#         return user.json()
