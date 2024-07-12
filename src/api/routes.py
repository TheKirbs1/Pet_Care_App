
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Dog
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


@api.route('/private', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    current_user = User.query.get(user_id)
    if current_user is None: 
        return jsonify({"msg": "User not found"}), 404
    
    return jsonify({"msg": "Here is your profile info", "user" : current_user.serialize()}), 200

@api.route('/user', methods=["GET"])
def get_all_users():
    users = User.query.all()
    all_users = [user.serialize() for user in users]
    return jsonify(all_users), 200

@api.route('/user/<int:user_id>/dogs', methods=['GET'])
def get_all_dogs(user_id):
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({'msg': 'User not found'}), 404
    user_dogs = Dog.query.filter_by(user_id=user_id).all()
    processed_dogs = [dog.serialize() for dog in user_dogs]

    response = {
        'msg': f'Hello {user.email}, here are your registered pets.',
        'pets': processed_dogs
    }

    return jsonify(response), 200

@api.route('/private/pet_registration', methods=['POST'])
# @jwt_required()
def add_pet():
    data = request.get_json()
    # user_id = get_jwt_identity()
    new_pet = Dog(
        name=data['name'],
        breed=data['breed'],
        gender=data['gender'],
        birth=data['birth'],
        spayed_neutered=data['spayedNeutered'],
        weight=data['weight'],
        user_id=1 #replace this with user_id
    )
    db.session.add(new_pet)
    db.session.commit()
    
    response = {
        'msg': f'Your pet has been successfully registered!',
    }
    return jsonify(response), 201

