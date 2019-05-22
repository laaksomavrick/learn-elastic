# What is elastic?

From a product perspective, Elastic is a search engine. This means it indexes data according to default or user defined analyzers, and provides an interface for making queries against these indexes.

From a technical perspective, Elastic is a distributed, NoSQL data store powered by Lucene, which provides an HTTP interface for making queries against indexes.

## Why use elastic in general?

Elastic provides a specialized suite of tooling, configuration, libraries and plugins specific to full text search against large volumes of data across multiple nodes.

Moreover, many companies use elastic as a specialized tool for consolidating and visualizing application logs (ELK stack).

## Why use elastic over SQL?

SQL is a Toyota Camry. It does many things well enough, but it does nothing well. While a better choice in the general case, elastic is a better choice for search.

Moreover, SQL full text search queries are often expensive. Using elastic frees up your sql data store to do other things, and not perform full text searches or log analysis.

## Why use elastic over cassandra?

Cassandra has poor support for full text search, or searches greater than 5000 records deep (correct me if I'm wrong...). It's not suitable for production workloads as a consequence.

Moreover, via elassandra, integrating with elastic requires little maintenance or thought, which is convenient.