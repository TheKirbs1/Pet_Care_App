
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# @api.route('/token', methods=['POST'])
# def generate_token():

#     email = request.json.get("email", None)
#     password = request.json.get("pasword", None)

#     # quey the User table to check ir the user exists
#     email = email.lower()
#     user = User.query.filter_by(email=email, password=password).first()

#     if user is None:
#         response = {
#             "msg": "Email or Password does not match."
#         }
#         return jsonify(response), 401
    
#     access_token = create_access_token(identity=user.id)
#     response = {
#         "access_token": access_token,
#         "user_id": user.id,
#         "msg": f'Welcome {user.email}!'
#     }

#     return jsonify(response), 200
def editUserSettings(email, password):
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()

    if user is None:
        return {'msg': 'User NOT found'}, True

    user.email = email
    user.password = password
    db.session.commit()

    return {'msg': 'Congratulations, You have successfully changed your Account Settings!'}, False

def deactivateOrReactivateAccount(is_active):
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()

    if user is None:
        return {'msg': 'User NOT found'}, True

    user.is_active = is_active
    db.session.commit()

    if is_active:
        return {'msg': 'Congratulations, You have successfully activated your Account'}, False
    else:
        return {'msg': 'Congratulations, You have successfully deactivated your Account'}, False

@api.route('/edit-user', methods=['PUT'])
@jwt_required()
def edit_user():
    user_id = get_jwt_identity()
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    email = email.lower()
    user = User.query.filter_by(id=user_id).first()

    if user is None:
        response = {
            'msg': 'User NOT found'
        }
        return jsonify(response), 404

    user.email = email
    user.password = password
    db.session.commit()

    response = {
        'msg': 'Congratulations, You have successfully changed your Account Settings!'
    }
    return jsonify(response), 200

@api.route('/deactivate-account', methods=['PUT'])
@jwt_required()
def deactivate_account():
    user_id = get_jwt_identity()
    is_active = request.json.get("is_active", None)
    user = User.query.filter_by(id=user_id).first()

    if user is None:
        response = {
            'msg': 'User NOT found'
        }
        return jsonify(response), 404

    msg, error = deactivateOrReactivateAccount(is_active)
    if error:
        return jsonify({'msg': msg}), 404
    else:
        return jsonify({'msg': msg}), 200


@api.route('/signup', methods=['POST'])
def register_user():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    email = email.lower()
    user = User.query.filter_by(email=email).first()

    if user:
        response ={
            'msg' : 'User already exist'
        }
        
        return jsonify(response), 403

    user = User()
    user.email = email
    user.password = password
    user.is_active = True
    db.session.add(user)
    db.session.commit()

    response ={
        'msg' : f'Congratulations, You have sussefully signed up!'
    }
    return jsonify(response), 200

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    email = email.lower()
    user = User.query.filter_by(email=email).first()

    if user is None:
        response ={
            'msg' : 'User does not exist'
        }
        
        return jsonify(response), 404
    
    if user.password != password:
        response ={
            'msg' : 'Incorrect Password'
        }
         
        return jsonify(response), 401
    
    access_token=create_access_token(identity=user.id)
    response ={
        'msg' : f'Congratulations, You have sussefully Logged In!',
        "token":access_token
    }
    return jsonify(response), 200


@api.route('/users/<int:user_id>/favorites', methods=['GET'])
def get_user_favorites(user_id):
    current_user = User.query.get(user_id)
    favorite_dogs = current_user.dog
    favorite_dogs = [fav_dog.serialize() for fav_dog in favorite_dogs]

    user_favorites = favorite_dogs

    return jsonify({ f"Current User '{current_user.username}' (id={current_user.id}) favorites": user_favorites }), 200
