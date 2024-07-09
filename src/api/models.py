from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    dogs = db.relationship("Dog", back_populates="user")
    favorite_dog_of = db.relationship("FavoriteDog", backref="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, it's a security breach
        }



class Dog(db.Model):
    __tablename__ = "dog_table"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.Boolean, nullable=False)
    breed = db.Column(db.String(250), nullable=False)
    spayed_neutered = db.Column(db.Boolean, nullable=False)
    weight = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    user = db.relationship("User", back_populates="dogs")

    def __repr__(self):
        return f'<Dog {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "breed": self.breed,
            "spayed_neutered": self.spayed_neutered,
            "weight": self.weight,
        }


class FavoriteDog(db.Model):
    __tablename__ = "favorite_dog_table"
    id = db.Column(db.Integer, primary_key=True)
    user_id_favorites = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    favorite_dog_id = db.Column(db.Integer, db.ForeignKey('dog_table.id'))
    
    def __repr__(self):
        return f'<FavoriteDog {self.user_id_favorites}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id_favorites": self.user_id_favorites,
        }

