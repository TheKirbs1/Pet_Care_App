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
            "dogs": [dog.serialize() for dog in self.dogs]
            # do not serialize the password, it's a security breach
        }



class Dog(db.Model):
    __tablename__ = "dog_table"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    birth = db.Column(db.Date)
    gender = db.Column(db.String, nullable=True)
    breed = db.Column(db.String(250), nullable=True)
    spayed_neutered = db.Column(db.String, nullable=True)
    weight = db.Column(db.String(250), nullable=True)
    # image = db.Column(db.String(250), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    user = db.relationship("User", back_populates="dogs")
    avatar = db.Column(db.Text)


    def __repr__(self):
        return f'<Dog {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "birth": self.birth,
            "gender": self.gender,
            "breed": self.breed,
            "spayed_neutered": self.spayed_neutered,
            "weight": self.weight,
            "avatar": self.avatar,
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

