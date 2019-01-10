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


    def get(self):
        data = UserData.parser.parse_args()
        user = UserModel

        if JobsModel.find_job_by_username(data['username']):
            jobs = [ job.json() for job in JobsModel.query.filter_by(username=data['username'])]
            return { 'jobs' : jobs }
        else:
            return {'message': 'no available jobs found'}
