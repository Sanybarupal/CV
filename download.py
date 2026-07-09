import urllib.request

url = "https://ui-avatars.com/api/?name=MGSU&background=ffffff&color=000000&size=220"
headers = {'User-Agent': 'Mozilla/5.0'}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response, open('assets/mgsu-logo.png', 'wb') as out_file:
        out_file.write(response.read())
    print("MGSU logo downloaded successfully!")
except Exception as e:
    print(f"Failed to download: {e}")
