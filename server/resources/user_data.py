import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel
from models.jobs import JobsModel
from models.skills import SkillsModel

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

    def get(self, username):
        user = UserModel

        if JobsModel.find_job_by_username(username):
            jobs = [ job.json() for job in JobsModel.query.filter_by(username=username)]
            user_data = [ user.json() for user in UserModel.query.filter_by(username=username) ]
            skills = [skill.json() for skill in SkillsModel.query.filter_by(username=username)]
            return {
            'jobs' : jobs,
            'user_data': user_data,
            'skills': skills
            }
        else:
            return {'message': 'no available jobs found'}

    def put(self, username):
        data = UserData.parser.parse_args()

        user = UserModel.find_by_username(data['username'])

        if user:
            user.profile_picture = data['profile_picture']
        else:
            return {'message': 'user {} could not be found'.format(data['username'])}

        user.save_to_db()

        return user.json()
