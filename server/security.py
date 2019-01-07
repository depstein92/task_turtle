from models.user import UserModel
from werkzeug.security import safe_str_cmp # better string comparison for diff versions

def authenticate(username, password):
    pass
    # user = UserModel.find_by_username(username)
    # if user and safe_str_cmp(user.password, password):
    #     return user

def identity(payload):
    pass
    # user_id = payload['identity']
    # return UserModel.find_by_id(user_id)
