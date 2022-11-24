from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index_html")


@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method=='POST':
        email = request.form["email_name"]
        return render_template("thankyou.html")

    
if __name__=='__main__':
    app.debug=True
    app.run()
