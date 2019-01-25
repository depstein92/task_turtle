import sqlite3
import random
from db import db
from random import randint

class PostsModel(db.Model):

    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    client = db.Column(db.String(40), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(180), nullable=False)
    location = db.Column(db.String(180), nullable=False)
    time = db.Column(db.String(40), nullable=False)
    date = db.Column(db.String(40), nullable=False)

    def __init__(self, client, title, description,location,time, date):
        self.client = client
        self.title = title
        self.description = description
        self.location = location
        self.time = time
        self.date = date

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_job_by_title(cls, title):
        return cls.query.filter_by(title=title).first()

    @classmethod
    def find_by_date_and_time(cls, date, time):
        return cls.query.filter_by(date=date, time=time).first()

    def json(self):
        return {
        'client': self.client,
        'title': self.title,
        'description': self.description,
        'location': self.location,
        'time': self.time,
        'date': self.date,
         }


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
