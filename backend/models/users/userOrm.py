from sqlalchemy import (schema, Boolean, 
                        Column, ForeignKey, 
                        Integer, String, DateTime
                    )
from sqlalchemy.orm import relationship
from datetime import datetime

from ..database import Base 

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True, index=True)
    mobile = Column(String, nullable=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    created = Column(DateTime, default=datetime.now())
    last_updated = Column(DateTime, default=datetime.now())

    assets = relationship("Asset", back_populates="owner")
