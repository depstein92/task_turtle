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

    parser.add_argument('client',
        type=str,
        required=True,
        help="Client cannot be blank"
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

    parser.add_argument('rating',
        type=int,
        required=True,
        help="Rating cannot be blank"
    )

    def post(self):
        data = JobsRegister.parser.parse_args() #adds constraints to data

        job = JobsModel(**data)

        job.save_to_db()

        return { "message": "Job added"}

    class JobsList(Resource):
        def get(self):
            return {'jobs' : [ job.json() for job in JobsModel.query.all() ]}
