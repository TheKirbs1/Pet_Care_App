from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__="user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    dogs = db.relationship("dog", back_populates="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Dog(db.Model):
    __tablename__="dog_table"
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(250), nullable=False)
    age= db.Column(db.Integer, nullable=False)
    gender= db.Column(db.Boolean, nullable=False)
    breed= db.Column(db.String(250), nullable=False)
    spayed_neutered = db.Column(db.Boolean, nullable=False)
    weight= db.Column(db.String(250), nullable=False)
    user_id =db.Column(db.ForeignKey("user_table.id"))
    user = db.relationship("user", back_populates="dogs")

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "breed": self.breed,
            "spayed_neutered": self.spayed_neutered,
            "weight": self.weight,

            # do not serialize the password, its a security breach
        }

    