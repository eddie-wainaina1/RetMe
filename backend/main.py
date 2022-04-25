from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return "All listed assets"


@app.get("/asset/{asset_id}")
def get_asset(asset_id: int):
    return {"asset_id": asset_id,}

@app.get("user/{user_id}")
def get_user(user_id:str):
    return {"user":user_id}

@app.get("for_rent")
def get_for_rent():
    return "Properties for rent"

@app.post("upload")
def upload_asset(Property):
    return "Asset Uploaded"