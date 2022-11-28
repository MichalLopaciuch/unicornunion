from flask import Flask
from flask import request
import psycopg2
import json
import os

app = Flask(__name__)

connection = psycopg2.connect(
        host="192.166.217.58",
        database="postgres",
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASS']
)
connection.autocommit = True
cursor = connection.cursor()

@app.route("/signin", methods=['POST'])
def sign_in():
    data = request.get_json()
    email = data.get('email', '')
    password = data.get('password', '')

    cursor.execute(f"SELECT signin(jsonb_build_object('email', '{email}', 'password', '{password}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)


@app.route("/signout", methods=['DELETE'])
def sign_out():
    token = request.headers.get('TOKEN', '')
    cursor.execute(f"SELECT signout(jsonb_build_object('token', '{token}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)


@app.route("/signed_in", methods=['GET'])
def signed_in():
    token = request.headers.get('TOKEN', '')
    cursor.execute(f"SELECT signed_in(jsonb_build_object('token', '{token}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)

