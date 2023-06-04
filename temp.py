from linkedin_api import Linkedin
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/",methods = ["GET","POST"])
def datapi():
    link = "tushar-amdoskar"
    if request.method == "POST":
        # https://www.linkedin.com/in/tushar-amdoskar/
        link = request.json["link"]

    # Authenticate using any Linkedin account credentials
    api = Linkedin('july2021tushar@gmail.com', 'mytemppass@resumebot')

    # GET a profile
    profile = api.get_profile(link)

    #print(profile)
    return jsonify({
        "name": profile["firstName"] + " " + profile["lastName"],
        "tagline":profile["headline"],
        "summary": profile["summary"],
        "education": profile["education"],
        "geoLocationName": profile["geoLocationName"],
        "profilePic":profile["displayPictureUrl"]+profile["img_800_800"],
        "experience": profile["experience"],
        "projects": profile["projects"],
        "certifications": profile["certifications"]
    })

app.run(debug=True)