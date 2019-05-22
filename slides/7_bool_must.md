# Boolean must

```
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "likes": {
              "value": 5
            }
          }
        },
        {
          "match": {
            "user.name": "Wyatt"
          }
        }
      ]
    }
  }
}
```

All the queries prior have been leaf queries. This is the first example of a compound query, which composes leaf queries or other compound queries. Bool is a query which matches documents matching boolean combinations of other queries. Here, we're using the _must_ query, which dictates that the clause must appear in matching documents. As can be seen, multiple leaf queries are composed within this must query (all tweets where likes = 5 and user.name = Wyatt).
