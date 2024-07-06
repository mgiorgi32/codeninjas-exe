from flask import Blueprint, render_template, redirect, url_for, request, session, g
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
from . import db

app_bp = Blueprint('app_bp', __name__)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)

@app_bp.before_app_request
def before_request():
    g.user = None
    if 'user_id' in session:
        g.user = User.query.get(session['user_id'])

@app_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.id
            return redirect(url_for('app_bp.index'))
        return redirect(url_for('app_bp.login'))
    return render_template('login.html')

@app_bp.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = generate_password_hash(request.form['password'], method='sha256')
        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('app_bp.login'))
    return render_template('register.html')

@app_bp.route('/')
def index():
    return render_template('index.html')

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if not g.user:
            return redirect(url_for('app_bp.login'))
        return f(*args, **kwargs)
    return wrap

@app_bp.route('/BuenosAires')
@login_required
def buenos_aires():
    return render_template('BuenosAires.html')

@app_bp.route('/Mendoza')
@login_required
def mendoza():
    return render_template('Mendoza.html')

@app_bp.route('/Cordoba')
@login_required
def cordoba():
    return render_template('Cordoba.html')

@app_bp.route('/SantaCruz')
@login_required
def santa_cruz():
    return render_template('SantaCruz.html')

@app_bp.route('/Reserva')
@login_required
def reserva():
    return render_template('Reserva.html')
