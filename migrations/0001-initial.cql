DROP KEYSPACE IF EXISTS twitter;

CREATE KEYSPACE twitter WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};