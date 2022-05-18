from pydantic import BaseModel
from typing import Optional

class Asset(BaseModel):
    type:str
    description:str
    available: bool 


class AssetDelete(BaseModel):
    id:str


class AssetModify(BaseModel):
    id:str
    type:Optional(str)
    description: Optional(str)
    available: Optional(bool)
    class Config:
        orm_mode = True
    
