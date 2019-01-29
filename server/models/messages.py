import sqlite3
from db import db
from sqlalchemy.orm import relationship
from random import randint


class MessagesModel(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(25), nullable=False)
    username = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(40), nullable=False)
    content = db.Column(db.String(300))
    location = db.Column(db.String(180), nullable=False)
    client= db.Column(db.String(30), nullable=False)
    date = db.Column(db.String(100), nullable=False)
    time = db.Column(db.String(40), nullable=False)

    def __init__(self, title, username, description, content, client, date, time, location):
        self.title = title
        self.username = username
        self.description = description
        self.content = content
        self.location = location
        self.client = client
        self.date = date
        self.time = time

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_job_by_title(cls, title):
        return cls.query.filter_by(title=title)

    @classmethod
    def find_by_client_title_date_time(cls, client, title, date, time):
        return cls.query.filter_by(client=client, title=title, date=date, time=time).first()     

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def json(self):
        return {
        'title': self.title,
        'username': self.username,
        'description': self.description,
        'content': self.content,
        'location': self.location,
        'client': self.client,
        'date': self.date,
        'time': self.time
        }
