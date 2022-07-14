from datetime import datetime

obj = {
    "created_date":datetime.now(),
    "first_name":"Ulric",
    "second_name": "Baraka"
}

def key_by_date(obj):
    return obj.created_date

def sort_by_date_ascending(objs:list)->list:
    sorted_list = sorted(objs,key_by_date)
    return sorted_list

def sort_by_date_descending(objs:list)->list:
     sorted_list = sorted(objs,key_by_date,reverse=True)
     return sorted_list
