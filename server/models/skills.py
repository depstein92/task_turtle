import sqlite3
import random
from db import db
from random import randint


class SkillsModel(db.Model):

    __tablename__ = 'skills'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, db.ForeignKey('users.username'))
    description = db.Column(db.String(40), nullable=False)

    def __intit__(self, username, description):
        self.username = Username
        self.description = description

    @classmethod
    def get_skills_by_username(cls, username):
        return cls.query.filter_by(username=username)

    def json(self):
        return { 'description': self.description }

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
