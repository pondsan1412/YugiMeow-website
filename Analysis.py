import requests

# ตั้งค่า Vercel API Token และ Project ID ของคุณ
api_token = "Adgx1UY4quU6ehYpdvDxze4o"
project_id = "prj_N6Wg99Gw4W4AwBrLNCIhN1e5CBkD"

# กำหนด URL สำหรับเรียกข้อมูล Web Analytics
url = f"https://api.vercel.com/v1/integrations/web-analytics/{project_id}/events"

# กำหนด headers สำหรับการเรียก API
headers = {
    "Authorization": f"Bearer {api_token}"
}

# เรียก API และรับข้อมูล
response = requests.get(url, headers=headers)

# ตรวจสอบสถานะของการเรียก API
if response.status_code == 200:
    data = response.json()
    print("Web Analytics Data:", data)
else:
    print("Failed to retrieve data:", response.status_code, response.text)
