from flask import Flask, render_template, redirect, url_for, request, session, g
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)

@app.before_request
def before_request():
    g.user = None
    if 'user_id' in session:
        g.user = User.query.get(session['user_id'])

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.id
            return redirect(url_for('index'))
        return redirect(url_for('login'))
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST']:
        username = request.form['username']
        password = generate_password_hash(request.form['password'], method='sha256')
        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/')
def index():
    return render_template('index.html')

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if not g.user:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return wrap

@app.route('/BuenosAires')
@login_required
def buenos_aires():
    return render_template('Buenos Aires.html')

@app.route('/Mendoza')
@login_required
def mendoza():
    return render_template('Mendoza.html')

@app.route('/cordoba')
@login_required
def cordoba():
    return render_template('cordoba.html')

@app.route('/SantaCruz')
@login_required
def santa_cruz():
    return render_template('SantaCruz.html')

@app.route('/Reserva')
@login_required
def reserva():
    return render_template('Reserva.html')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
