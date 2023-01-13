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


# AUTH
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


# PROJECT
@app.route("/project", methods=['POST'])
def add_project():
    data = request.get_json()

    name = data.get('name', '')

    cursor.execute(f"SELECT add_projects(jsonb_build_object('name', '{name}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)


@app.route("/project", methods=['GET'])
def get_project():
    data = request.get_json()

    pid = data.get('id', '')
    name = data.get('name', '')

    cursor.execute(f"SELECT get_projects(jsonb_build_object('id', '{pid}', 'name', {name}));")
    response = cursor.fetchone()[0]

    return json.dumps(response)


@app.route("/project", methods=['DELETE'])
def del_project():
    data = request.get_json()

    pid = data.get('id', '')

    cursor.execute(f"SELECT del_project(jsonb_build_object('id', '{pid}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)


# TASKS
@app.route("/tasks", methods=['POST'])
def add_tasks():
    token = request.headers.get('TOKEN', '')
    data = request.get_json()
    payload = data.get('payload', '')
    month = data.get('month', '')

    cursor.execute(f"SELECT add_tasks(jsonb_build_object('payload', '{payload}', 'month', '{month}'), '{token}');")
    response = cursor.fetchone()[0]

    return json.dumps(response)


@app.route("/tasks", methods=['GET'])
def get_tasks():
    token = request.headers.get('TOKEN', '')
    data = request.get_json()
    month = data.get('month', '')

    cursor.execute(f"SELECT get_tasks(jsonb_build_object('month', '{month}', 'token', '{token}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)


@app.route("/tasks", methods=['DELETE'])
def del_tasks():
    token = request.headers.get('TOKEN', '')
    data = request.get_json()
    month = data.get('month', '')

    cursor.execute(f"SELECT del_tasks(jsonb_build_object('month', '{month}', 'token', '{token}'));")
    response = cursor.fetchone()[0]

    return json.dumps(response)
