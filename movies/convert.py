import json

def process_line(line):
    out = {}
    arr = line.split(' ', 5)
    out['title'] = arr[5].split('>')[1][:-10]
    out['year'] = int(arr[5].split('>')[1][-8:-4])
    try:
        out['rating'] = float(arr[3][:-1])
    except ValueError:
        pass
    out['url'] = arr[1][6:-1]
    return out


def main():
    with open('movies.txt') as f:
        arr = []
        for line in f:
            arr.append(process_line(line.strip()))
    json_out = {}
    json_out['movies'] = arr
    with open('movies.json', 'w') as f:
        json.dump(json_out, f)

main()
