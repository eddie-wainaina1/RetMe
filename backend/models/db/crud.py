from sqlalchemy.orm import Session

from ..assets import assetPd, assetOrm
from ..users import userPd, userOrm

def add_user(db:Session,details):
    db_user = userOrm.User(**details)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_users(db:Session):
    return db.query(userOrm.User)

def get_user(db:Session,id):
    return db.query(userOrm.User).filter(userOrm.User.id==id).first()

def modify_user(db:Session,id,details):
    db_user = db.query(userOrm.User).filter(userOrm.User.id==id).first()
    for key,value in details.items():
        db_user[key] = value 
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db:Session,id):
    try:
        db_user = db.query(userOrm.User).filter(userOrm.User.id==id).first()
        db.delete(db_user)
        db.commit()
        return True
    except:
        return False

def add_asset(db:Session,details):
    db_asset = assetOrm.Asset(**details)
    db.add(db_asset)
    db.commit()
    db.refresh(db_asset)
    return db_asset

def get_assets(db:Session):
   return db.query(assetOrm.Asset)

def get_asset(db:Session,id):
    return db.query(assetOrm.Asset).filter(assetOrm.Asset.id==id).first()

def modify_asset(db:Session,id,details):
    db_asset = db.query(assetOrm.Asset).filter(assetOrm.Asset.id==id).first()
    for key, value in details.items():
        db_asset[key] = value
    db.add(db_asset)
    db.commit()
    db.refresh(db_asset)
    return db_asset

def delete_asset(db:Session,id):
    try:
        db_asset = db.query(assetOrm.Asset).filter(assetOrm.Asset.id==id).first()
        db.delete(db_asset)
        db.commit()
        return True
    except:
        return False
