from pydantic import BaseModel, EmailStr 
import datetime
class User(BaseModel):
    first_name:str 
    last_name:str 
    email:EmailStr 
    username:str
    password_hashed:str
    created:datetime.datetime
    mobile:str

class UserIn(BaseModel):
    first_name:str 
    last_name:str 
    email:EmailStr 
    username:str
    password_raw:str
    created:datetime.datetime
    mobile: str
class UserOut(BaseModel):
    username:str
    created:datetime.datetime