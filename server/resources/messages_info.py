import sqlite3
from flask_restful import Resource, reqparse
from models.messages import MessagesModel
from models.posts import PostsModel
from db import db

class MessagesInfo(Resource):

        parser = reqparse.RequestParser()

        parser.add_argument('username',
            type=str,
            required=True,
            help="UserName cannot be blank"
        )

        parser.add_argument('title',
            type=str,
            required=True,
            help="Title cannot be blank"
        )

        parser.add_argument('description',
            type=str,
            required=False,
            help="Description Field cannot be blank"
        )

        parser.add_argument('content',
            type=str,
            required=False,
            help="Content Field cannot be blank"
        )

        parser.add_argument('location',
            type=str,
            required=True,
            help="Content Field cannot be blank"
        )

        parser.add_argument('client',
            type=str,
            required=True,
            help="Client Field cannot be blank"
        )

        parser.add_argument('date',
            type=str,
            required=True,
            help="Date Field cannot be blank"
        )

        parser.add_argument('time',
            type=str,
            required=True,
            help="Time Field cannot be blank"
        )

        def post(self, username):

            data = MessagesInfo.parser.parse_args()

            message = MessagesModel(**data)

            MessagesModel.save_to_db(message)

            message.save_to_db()


        def get(self, username):

            if MessagesModel.find_by_username(username):

                messages = [ message.json() for message in MessagesModel.query.filter_by(username=username) ]

                return {
                 'message': 'Messages loaded successfully',
                 'messages': messages
                }

            else:
                return {
                 'message': 'There are no user messages',
                 'messages': ['Messages shown here...']
                }


        def delete(self, username):

            data = MessagesInfo.parser.parse_args()

            if MessagesModel.find_by_client_title_date_time(data['client'], data['title'], data['date'], data['time']):

               message = MessagesModel.find_by_client_title_date_time(data['client'], data['title'], data['date'], data['time'])
               
               MessagesModel.delete_from_db(message)

               return { 'message': 'Message Deleted' }

            else:

                return { 'message': 'Could not find Message to delete' }
