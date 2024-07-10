from . import db

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(120),  nullable=False)
    password = db.Column(db.String(12), nullable= False)
    nacionalidad = db.Column(db.String(50), nullable = False)

    