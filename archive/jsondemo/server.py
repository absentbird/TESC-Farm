from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def json_frontend():
    #url = request.base_url[:-6]
    url = request.base_url
    return render_template("json.html", url=url)

if __name__ == '__main__':
    app.run()
