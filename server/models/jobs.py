import sqlite3
import random
from db import db
from random import randint

class JobsModel(db.Model):

    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, db.ForeignKey('users.username'), nullable=False)
    client = db.Column(db.String(40), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(180), nullable=False)
    date = db.Column(db.String(40), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    def __init__(self, username, client, title, description, date, rating):
        self.username = username
        self.client = client
        self.title = title
        self.description = description
        self.date = date
        self.rating = rating

    @classmethod
    def find_job_by_id(cls,_id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_job_by_username(cls, username):
        return cls.query.filter_by(username=username)

    @classmethod
    def find_job_by_title(cls, title):
        return cls.query.filter_by(title=title)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def json(self):
        return {
        'username': self.username,
        'client': self.client,
        'title': self.title,
        'description': self.description,
        'date': self.date,
        'rating': self.rating
         }
