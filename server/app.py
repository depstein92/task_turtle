from flask import Flask
from db import db
from flask_restful import Api
from flask_jwt import JWT
from flask_cors import CORS

from sqlalchemy import event, DDL

from resources.security import authenticate, identity
from resources.user_register import UserRegister
from resources.user_login import UserLogin
from resources.jobs_register import JobsRegister
from resources.user_data import UserData
from resources.skills_register import SkillsRegister
from resources.posts_register import PostsRegister
from resources.user_description import UserDescription

from models.user import UserModel
from models.jobs import JobsModel
from models.skills import SkillsModel
from models.posts import PostsModel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db' #sqllite is exchangeable
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #turns off extensions
app.config['SQLALCHEMY_ECHO'] = True
api = Api(app)
CORS(app)


@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity)

api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(JobsRegister, '/jobs')
api.add_resource(UserData, '/user_data/<string:username>')
api.add_resource(UserDescription, '/user_description/<string:username>')
api.add_resource(SkillsRegister, '/skills')
api.add_resource(PostsRegister, '/job_posts')

###################SEED DATABASE####################

############USER REGISTER SEED################
@event.listens_for(UserModel.__table__, 'after_create')
def insert_initial_values_user(*args, **kwargs):

    db.session.add(UserModel(
       username='dart',
       password='dart',
       profile_picture=None,
       description='dart is not client',
       isClient=False,
       rating=0,
       ))
    db.session.add(UserModel(
       username='bart',
       password='bart',
       profile_picture=None,
       description='bart is client',
       isClient=True,
       rating=0,
       ))
    db.session.commit()

############USER JOBS SEED################
@event.listens_for(JobsModel.__table__, 'after_create')
def insert_initial_values_jobs(*args, **kwargs):
    db.session.add(JobsModel(
      username="dart",
      client='Keith',
      title='Raked Lawn',
      date='03/24/2019',
      description='I raked the Lawn',
      rating=5))

    db.session.add(JobsModel(
      username="dart",
      client='Keith',
      title='Painted Wall',
      date='06/28/2019',
      description='I painted the Lawn and Wall',
      rating=5))

    db.session.add(JobsModel(
      username='dart',
      client='Keith',
      title='Put Sheet Rock',
      date='06/29/2019',
      description='I put Sheet rock in garage',
      rating=5))
    db.session.commit()

#############POSTS SEED###############
@event.listens_for(PostsModel.__table__, 'after_create')
def insert_initial_values_posts(*args, **kwargs):
    db.session.add(PostsModel(
      client='Keith',
      title='Get Sheep',
      description='I lost my Sheep',
      location="Cary, NC",
      time="6:30",
      date='04/5/2019'
      ))

    db.session.add(PostsModel(
      client='Keith',
      title='Sheer Sheep',
      description='Got to Sheer Sheep',
      location="Cary, NC",
      time="6:30",
      date='04/5/2019'))

    db.session.add(PostsModel(
      client='Kevin',
      title='Lay Brick',
      description='Come Lay Brick',
      location="Cary, NC",
      time="6:30",
      date='04/6/2019'
      ))
    db.session.commit()

#############SKILLS SEED###############
@event.listens_for(SkillsModel.__table__, 'after_create')
def insert_initial_values_skills(*args, **kwargs):

    db.session.add(SkillsModel(
      username='dart',
      description='Mow Lawns'
      ))
    db.session.add(SkillsModel(
      username='dart',
      description='Paint Walls'
      ))
    db.session.add(PostsModel(
      username='dart',
      description='Yeet'))
    db.session.commit()


if __name__ == "__main__":
    from db import db
    db.init_app(app)
    app.run(host="0.0.0.0", debug=True, port=5000)
