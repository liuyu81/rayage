#!/usr/bin/python

import os
import sys
import random

system_directory = os.path.dirname(os.path.abspath(__file__))

sys.path.append(system_directory + "/imports")

from names import names as usernames

from database.User import User
from database.SessionFactory import SessionFactory

session = SessionFactory()
try:
    for username in usernames:
        permission_level = random.randint(0,4)
        user = User(username, permission_level)
        session.add(user)
    session.commit()
finally:
    session.close()

