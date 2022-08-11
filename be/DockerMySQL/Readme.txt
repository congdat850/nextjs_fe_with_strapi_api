
# build docker-compose-mysql-only.yml
docker-compose -f docker-compose-mysql.yml up

# Into to container mysql
$ mysql -u root -p
Enter password: (enter your root password)
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
mysql> FLUSH PRIVILEGES;
mysql> quit
