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


@api.route('/token', methods=['POST'])
def generate_token():

    email = request.json.get("email", None)
    password = request.json.get("pasword", None)

    # quey the User table to check ir the user exists
    email = email.lower()
    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        response = {
            "msg": "Email or Password does not match."
        }
        return jsonify(response), 401
    
    access_token = create_access_token(identity=user.id)
    response = {
        "access_token": access_token,
        "user_id": user.id,
        "msg": f'Welcome {user.email}!'
    }

    return jsonify(response), 200

