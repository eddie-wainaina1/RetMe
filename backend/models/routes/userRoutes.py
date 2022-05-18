from fastapi import APIRouter, Depends, HTTPException
from ...app.dependencies.dependencies import get_token_header

user_router = APIRouter(
    prefix="/users",
    tags=["users"],
    dependencies=[Depends(get_token_header)],
    responses={
        404: {"description": "Not found"}
    },
)

@user_router.get("/")
def get_users():
    return {"users":"list of users"}

@user_router.get("/{id}")
def get_user(id):
    return {"user_id":id}

@user_router.post("/")
def create_user(user_details):
    return user_details 

@user_router.put("/{id}")
def replace_user_details(id,user_details):
    return {id:user_details}

@user_router.patch("/{id}")
def modify_user_details(id,user_details):
    return {id:user_details}

@user_router.delete("/{id}")
def delete_user(id):
    return "successful"
