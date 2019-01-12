from faker import Faker
from models.user import UserModel
from models.jobs import JobsModel

fake = Faker()
for _ in range(5):
    UserModel.seed(fake)
    JobsModel.seed(fake)
