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
api.add_resource(SkillsRegister, '/skills')
api.add_resource(PostsRegister, '/job_posts')

# api.add_resource(Item, '/item/<string:name>')
# api.add_resource(ItemList, '/items')
# api.add_resource(UserRegister, '/register')

###################SEED DATABASE####################

@event.listens_for(UserModel.__table__, 'after_create')
def insert_initial_values(*args, **kwargs):

    ############USER REGISTER SEED################
    db.session.add(UserModel(username='dart'))
    db.session.add(UserModel(password='dart'))
    db.session.add(UserModel(profile_picture=None))
    db.session.add(UserModel(rating=0))
    db.session.add(UserModel(description='dart'))
    db.session.commit()

    ############USER JOBS SEED################
@event.listens_for(JobsModel.__table__, 'after_create')
def insert_initial_values(*args, **kwargs):
    db.session.add(JobsModel(username="dart"))
    db.session.add(JobsModel(client='Keith'))
    db.session.add(JobsModel(title='Raked Lawn'))
    db.session.add(JobsModel(date='03/24/2019'))
    db.session.add(JobsModel(description='I raked the Lawn'))
    db.session.add(JobsModel(rating=5))

    db.session.add(JobsModel(username="dart"))
    db.session.add(JobsModel(client='Keith'))
    db.session.add(JobsModel(title='Painted Wall'))
    db.session.add(JobsModel(date='06/28/2019'))
    db.session.add(JobsModel(description='I painted the Lawn and Wall'))
    db.session.add(JobsModel(rating=5))

    db.session.add(JobsModel(username="dart"))
    db.session.add(JobsModel(client='Keith'))
    db.session.add(JobsModel(title='Put Sheet Rock'))
    db.session.add(JobsModel(date='06/29/2019'))
    db.session.add(JobsModel(description='I put Sheet rock in garage'))
    db.session.add(JobsModel(rating=5))
    db.session.commit()


@event.listens_for(PostsModel.__table__, 'after_create')
def insert_initial_values(*args, **kwargs):
    #############POSTS SEED###############
    db.session.add(PostsModel(client='Keith'))
    db.session.add(PostsModel(title='Get Sheep'))
    db.session.add(PostsModel(description='I lost my Sheep'))
    db.session.add(PostsModel(location="Cary, NC"))
    db.session.add(PostsModel(date='04/5/2019'))

    db.session.add(PostsModel(client='Keith'))
    db.session.add(PostsModel(title='Sheer Sheep'))
    db.session.add(PostsModel(description='Got to Sheer Sheep'))
    db.session.add(PostsModel(location="Cary, NC"))
    db.session.add(PostsModel(date='04/5/2019'))

    db.session.add(PostsModel(client='Kevin'))
    db.session.add(PostsModel(title='Lay Brick'))
    db.session.add(PostsModel(description='Come Lay Brick'))
    db.session.add(PostsModel(location="Cary, NC"))
    db.session.add(PostsModel(date='04/6/2019'))
    db.session.commit()

    #############SKILLS SEED###############
@event.listens_for(SkillsModel.__table__, 'after_create')
def insert_initial_values(*args, **kwargs):

    db.session.add(SkillsModel(username='dart'))
    db.session.add(PostsModel(description='Mow Lawns'))
    db.session.add(PostsModel(description='Paint Walls'))
    db.session.add(PostsModel(description='Sheer Sheap'))
    db.session.commit()


if __name__ == "__main__":
    from db import db
    db.init_app(app)
    app.run(host="0.0.0.0", debug=True, port=5000)
