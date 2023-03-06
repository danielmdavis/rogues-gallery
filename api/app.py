from flask import Flask, url_for
from flask import request
from flask_cors import CORS, cross_origin
import json

f = open("collated.json")
landlords = json.load(f)

app = Flask(__name__)
cors = CORS()
cors.init_app(app)

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

@app.route("/site-map")
def site_map():
    links = []
    for rule in app.url_map.iter_rules():
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            links.append((url, rule.endpoint))
    return links




@app.route("/", methods=["GET"])
# @cross_origin(allows_options=["*"], allow_headers=["*"], allow_methods=["*"], allow_origins=["*"])
def api():
    name = request.args.get("name")
    matches = [{key: value} for key, value in landlords.items() if name in key]
    return matches

@app.route("/", methods=["OPTIONS"])
@cross_origin(allows_options=["*"], allow_headers=["*"], allow_methods=["*"], allow_origins=["*"])
def my_api_options():
    response = make_response()
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', '*')
    response.headers.add('Access-Control-Allow-Methods', '*')
    return response