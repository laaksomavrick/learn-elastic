# The query dsl

Elastic provides an http interface for search requests. At a high level, there are two kind of queries we can make: leaf query clauses (queries which look for a particular value in a field), and compound query clauses (queries which wrap other leaf or compound queries and are used to compose multiple queries).

For example, a leaf query might be a _match_:

```
{
  "query": {
    "match": {
      "some_arbitrary_field": "some_value"
    }
  }
}
```

This roughly translates to `SELECT * FROM foo WHERE some_arbitrary_field = some_value`;

And a compound query might be a _bool_:

```
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "likes": {
              "value": 20814
            }
          }
        },
        {
          "match": {
            "bar.baz": "Wyatt"
          }
        }
      ]
    }
  }
}
```

This roughly translates to `SELECT * FROM foo WHERE likes = 20814 AND bar.baz = 'Wyatt'`;