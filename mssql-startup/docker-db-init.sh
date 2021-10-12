echo "running set up script"
#run the setup script to create the DB and the schema in the DB
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P mssqlPassw0rd! -d master -l 90 -i db-init.sql
