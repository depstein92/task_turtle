import sqlite3
from db import db

class JobsModel(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(180), nullable=False)
    date = db.Column(db.String(40), nullable=False)

    def __init__(self, user_id, title, description, date ):
        self.user_id = user_id
        self.title = title
        self.descripiton = description
        self.date = date

    @classmethod
    def find_job_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()    

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def json(self):
        return {'title': self.title, 'description': self.description, 'date': self.date }
