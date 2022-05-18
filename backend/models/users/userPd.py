from pydantic import BaseModel, EmailStr 
import datetime

class UserBase(BaseModel):
    first_name:str 
    last_name:str
    username:str
    created:datetime.datetime

class UserSave(UserBase):
    email:EmailStr 
    password_hashed:str
    mobile:str
    class Config:
        orm_mode = True

class UserIn(UserBase):
    email:EmailStr
    password_raw:str
    mobile: str

class UserOut(UserBase):
    class Config:
        orm_mode = True
