# Boolean should

```
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "content": "back"
          }
        }
      ],
      "should": [
        {
          "match": {
            "replies": "pizza"
          }
        }
      ]
    }
  }
}
```

Here, we're using the should query, which dictates a preference that the matching clause should appear in the matching document. Multiple clauses in a should can be conceptualized as a set of `OR`s, as in `foo = bar OR foo = baz`.
