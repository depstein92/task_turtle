import sqlite3
from flask_restful import Resource, reqparse
from models.jobs import JobsModel

class JobsRegister(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="UserName cannot be blank"
    )

    parser.add_argument('title',
        type=str,
        required=True,
        help="Title Field cannot be blank"
    )

    parser.add_argument('description',
        type=str,
        required=True,
        help="Description Field cannot be blank"
    )

    parser.add_argument('date',
        type=str,
        required=True,
        help="Date Field cannot be blank"
    )

    def post(self):
        data = JobsRegister.parser.parse_args() #adds constraints to data

        if JobsModel.find_job_by_id(data['title']):
           return {'message': 'job exists already'}

        job = JobsModel(**data)
        # for each value on data insert data
        #this is because of dataparser
        #Equally we could have put UserModel(data['username'], data['password'])

        job.save_to_db()

        return { "message": "Job added"}

    class JobsList(Resource):
        def get(self):
            return {'job' : [ job.json() for job in JobsModel.query.all() ]}
