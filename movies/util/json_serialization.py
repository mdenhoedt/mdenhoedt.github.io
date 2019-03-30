import json


def load(file_name):
    with open(file_name, encoding='utf-8') as f:
        data = json.load(f)
    return data

def dump(file_name, data):
    with open(file_name, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, sort_keys=True, ensure_ascii=False)

