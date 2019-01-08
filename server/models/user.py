import sqlite3
from db import db

class UserModel(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40))
    password = db.Column(db.String(40))

    def __init__(self, username, password):
        self.username = username
        self.password = password

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    def save_to_db(self): #good for update and insert
        db.session.add(self) #saves to database
        db.session.commit()

    @classmethod
    def find_by_username_and_password(cls, username, password):
        return cls.query.filter_by(username=username, password=password).first()    

    def json(self):
        return {'username': self.username, 'password': self.password }

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()
