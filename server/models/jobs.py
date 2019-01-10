import sqlite3
from db import db

class JobsModel(db.Model):

    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, db.ForeignKey('users.username'), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(180), nullable=False)
    date = db.Column(db.String(40), nullable=False)

    def __init__(self, username, title, description, date):
        self.username = username
        self.title = title
        self.description = description
        self.date = date

    @classmethod
    def find_job_by_id(cls,_id):
        return cls.query.filter_by(id=_id).first()

    @classmethod
    def find_job_by_username(cls, username):
        return cls.query.filter_by(username=username)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def json(self):
        return { 'username': self.username,'title': self.title, 'description': self.description, 'date': self.date }
