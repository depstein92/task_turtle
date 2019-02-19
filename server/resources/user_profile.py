import sqlite3
from flask_restful import Resource, reqparse
from models.user import UserModel
from models.jobs import JobsModel
import logging
import os

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
            target=os.path.join(UPLOAD_FOLDER,'test_docs')
            if not os.path.isdir(target):
              os.mkdir(target)
            logger.info("welcome to upload`")
            file = data['profile_picture']
            filename = secure_filename(file.filename)
            destination="/".join([target, filename])
            file.save(destination)
            session['uploadFilePath']=destination
            response="Profile Picture Successfully edited"
            return response
        else:
            return {'message': 'user {} could not be found'.format(username)}

        user.save_to_db()

        return user.json()
