import sqlite3
from flask_restful import Resource, reqparse
from models.skills import SkillsModel

class SkillsRegister(Resource):

    parser = reqparse.RequestParser()

    parser.add_argument('username',
        type=str,
        required=True,
        help="UserName cannot be blank"
    )

    parser.add_argument('description',
        type=str,
        required=True,
        help="Description cannot be blank"
    )

    def post(self):

        data = SkillsRegister.parser.parse_args()

        skill = SkillsModel(**data)

        skill.save_to_db()

        return {"message": "skill registered" }
