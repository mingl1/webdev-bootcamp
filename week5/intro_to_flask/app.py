from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:0161@localhost:5432/db1"

db = SQLAlchemy(app)

class Reaction(db.Model):
    __tablename__ = 'Reaction_Speed'
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self,score_):
        self.score = score_



@app.route('/', methods=['POST','GET'])
def index():
    if request.method == 'POST':
        score = (request.form['score'])
        new_task = Reaction(score_=score)
        db.session.add(new_task)
        db.session.commit()
        #how to not refresh page on POST?
        return redirect('/')
    else:
        scores = Reaction.query.order_by(Reaction.score, Reaction.date_created).limit(10).all()
        return render_template('index.html', scores=scores)

if __name__ == '__main__':
    app.run(debug=True)