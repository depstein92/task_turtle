import sqlite3
from db import db
from sqlalchemy.orm import relationship

class UserModel(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40))
    password = db.Column(db.String(40))
    profile_picture = db.Column(db.String(200))
    rating = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(200), nullable=True)
    children = relationship("JobsModel")

    def __init__(self, username, password, profile_picture=None, rating=None, description=None):
        self.username = username
        self.password = password
        self.profile_picture = profile_picture
        self.rating = rating
        self.description = description


    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_username_and_password(cls, username, password):
        return cls.query.filter_by(username=username, password=password).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()


    def json(self):
        return {'username': self.username, 'password': self.password, 'profile_picture': self.profile_picture }
