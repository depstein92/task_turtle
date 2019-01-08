from flask import Flask
from db import db
from flask_restful import Api
from flask_jwt import JWT
from flask_cors import CORS

from resources.security import authenticate, identity
from resources.user_register import UserRegister

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db' #sqllite is exchangeable
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #turns off extensions
api = Api(app)
CORS(app)

@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity)

api.add_resource(UserRegister, '/register')

# api.add_resource(Item, '/item/<string:name>')
# api.add_resource(ItemList, '/items')
# api.add_resource(UserRegister, '/register')


if __name__ == "__main__":
    from db import db
    db.init_app(app)
    app.run(host="0.0.0.0", debug=True, port=5000)
