import csv
import os
import requests
import sys

csvinput = "tasks.csv"
env_var = "WORKERTOKEN"
apiurl = "https://api.tesc.farm"
#apiurl = "http://127.0.0.1:8078"

headers = {"Content-Type": "application/json"}
if os.getenv(env_var):
    headers['Authorization'] = os.environ[env_var]
if len(sys.argv) > 1:
    csvinput = sys.argv[1]

crop_response = requests.get(apiurl + "/crops")
if crop_response.status_code != 200:
    print("Error getting crops.")
    quit()
crop_array = crop_response.json()
crops = {crop['name']+crop['variety']: crop for crop in crop_array}

with open(csvinput, 'r') as file:
    csv_reader = csv.reader(file)
    for task in csv_reader:
        print(task)
        payload = {}
        payload['name'] = task[0]
        payload['tags'] = []
        if task[1] == 'preharvest':
            payload['tags'].append({'name': 'Preharvest'})
            planting = {}
            newcrop = {'name': task[0]}
            parts = task[0].split(", ")
            if ''.join(parts) in crops:
                planting['crop_id'] = crops[''.join(parts)]['ID']
            else:
                if len(parts) == 2:
                    payload['name'] = f"{parts[1]} {parts[0]}"
                    newcrop['name'] = parts[0]
                    newcrop['variety'] = parts[1]
                newcrop['tags'] = [{'name': parts[0]}]
                response = requests.post(apiurl + "/crop/new", headers=headers, json=newcrop)
                if response.status_code == 200:
                    data = response.json()
                    print("Response:", data)
                    planting['crop_id'] = data['ID']
                else:
                    print("Error:", response.text)
                    quit()
            response = requests.post(apiurl + "/planting/new", headers=headers, json=planting)
            if response.status_code == 200:
                data = response.json()
                print("Response:", data)
                payload['planting_id'] = data['ID']
            else:
                print("Error:", response.text)
                quit()
            payload['description'] = "Preharvest " + payload['name']
        elif task[1] == 'harvest':
            payload['tags'].append({'name': 'Harvest'})
            harvest = {}
            newcrop = {'name': task[0]}
            parts = task[0].split(", ")
            if ''.join(parts) in crops:
                harvest['crop_id'] = crops[''.join(parts)]['ID']
            else:
                if len(parts) == 2:
                    payload['name'] = f"{parts[1]} {parts[0]}"
                    newcrop['name'] = parts[0]
                    newcrop['variety'] = parts[1]
                newcrop['tags'] = [{'name': parts[0]}]
                response = requests.post(apiurl + "/crop/new", headers=headers, json=newcrop)
                if response.status_code == 200:
                    data = response.json()
                    print("Response:", data)
                    harvest['crop_id'] = data['ID']
                else:
                    print("Error:", response.text)
                    quit()
            response = requests.post(apiurl + "/harvest/new", headers=headers, json=harvest)
            if response.status_code == 200:
                data = response.json()
                print("Response:", data)
                payload['harvest_id'] = data['ID']
            else:
                print("Error:", response.text)
                quit()
            payload['description'] = "Harvest " + payload['name']
        elif task[1] == "mu":
            payload['tags'].append({'name': 'Management Unit'})
            payload['description'] = 'Work in ' + payload['name']
        else:
            payload['tags'].append({'name': 'Maintenance'})
        print(payload)
        response = requests.post(apiurl + "/task/new", headers=headers, json=payload)
        if response.status_code == 200:
            data = response.json()
            print("Response:", response.json())
        else:
            print("Error:", response.text)
            quit()
