from flask import jsonify,request
import json
from application import app,db
from application.models.users_models import UserModel
from application.models.users_models import RevokedTokenModel

 #connections, time_zone, last_online
# def __init__(self, name, email, username, profile_bio, rating,flags ):
#         self.name = name
#         self.email = email
#         self.username = username
#         self.rating = rating
#         self.flags = flags
#         self.profile_bio = profile_bio
        # self.connections = connections
        # self.time_zone = time_zone
        # self.last_online = last_online

# @app.route("/user/<user_id>", methods=['GET', 'PATCH' 'DELETE'])
# def get_user(user_id):
#     # return UserModel.find_by_id(user_id)
#     # user = {"username": "Spiderman",
#     #         "name": "Miles",
#     #         "email": "WhatsUp@Danger.com",
#     #         "password": "Sunflower",
#     #         "profile_bio": "hi"}
#     user = UserModel.query.filter_by(user_id= user_id).first()
#     return jsonify(user), 200

def update_user(user_id):
    user = UserModel.query.filter_by(user_id= user_id).first()
    if not user:
        return jsonify({'error': 'user not found'})
    
    data = request.json
    user.name = data.get('name',user.name)
    user.username = data.get('username',user.username)
    user.email = data.get('email',user.email)
    user.profile_bio = data.get('profile',user.profile_bio)

    db.session.commit()
    updated_user = user
    return jsonify(user_id = updated_user.user_id, name =updated_user.name,username = user.username,email = updated_user.email, profile_bio = updated_user.profile_bio)

# def update_user_password(user_id):
#     user = UserModel.query.filter_by(user_id= user_id).first()
#     data = request.json
#     user.password = data.get('password',user.password)
#     db.session.commit()
#     updated_password = user
#     return jsonify(password = updated_password.password)

def update_rating(user_id):
    user = UserModel.query.filter_by(user_id= user_id).first()
    data = request.json
    newrating = data.get('rating',user.rating)
    user.rating = (user + newrating )/2
    db.session.commit()
    updated_rating = user
    return jsonify(rating = updated_rating.rating)
    
def update_user_flags(user_id):
    newflags = UserModel.query.filter_by(user_id= user_id).first()
    data = request.json
    newflags.flags = data.get('rating',newflags.flags)
    db.session.commit()
    updated_flags = newflags
    # front end + 1 
    if updated_flags == 3:
        RevokedTokenModel
    return jsonify(flags = updated_flags.flags)

# not sure about these yet
#     # connections_id = db.Column(db.Integer, foreign_key = True)
#     # langauges_id = db.Column(db.Integer, foreign_key = True)
#     # games_id = db.Column(db.Integer, foreign_key = True)
    # time_zone = db.Column(db.Integer, nullable=True)
    # last_online = db.Column(db.Integer, nullable=True)

# def delete_user(user_id):
#   user = UserModel.query.filter_by(id=user_id).first()
#   db.session.delete(user)
#   db.session.commit()
#   return 'User Deleted'
