import psycopg2
from psycopg2.extras import RealDictCursor

def getCursor():
    try:
        conn = psycopg2.connect(
            host="localhost", 
            database="retme",
            user="postgres",
            cursor_factory=RealDictCursor
        )
        cursor = conn.cursor
        print("connection accepted")
        return cursor
    except Exception as error:
        print("Error:",error)
        raise ConnectionRefusedError
