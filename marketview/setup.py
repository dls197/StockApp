import os

#Creating the ".env" file:
f= open(".env","w+")
f.write("REACT_APP_FINNHUB_API_KEY=c1se9aqad3i9o8uaclc0")

#Running the "npm install" command:

os.system("npm install")

#Setting up the mysql database:

os.chdir("./database")
password = input("Type your mysql password for root user: ")
os.system("mysql -u root -p"+ password + " < marketview.sql")
os.chdir("..")
os.chdir("./server")

f=open("index.js", "r")
lines=f.readlines()
lines[20] = 'password: "' + password + '", \n'

f=open("index.js", "w")
f.writelines(lines)
f.close()



