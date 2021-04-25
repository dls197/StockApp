In order to recreate the MySQL Database from the .sql file in this directory on your machine follow these steps:

1.Open a terminal and change directory to the directory this file is in.
2.Run the following command: "mysql -u root -p <marketview.sql"
3.You will be prompted to enter a password, enter the password that you used for root when setting up MySQL on your machine.

In order to update the MySQL Database from the .sql file in this directory to reflect local changes you made on your machine follow these steps:

1.Open a terminal and change directory to the directory this file is in.
2.Run the following command: "mysqldump -u root -p --databases marketview > marketview.sql"
3.You will be prompted to enter a password, enter the password that you used for root when setting up MySQL on your machine.