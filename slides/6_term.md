# Term

```
{
  "query": {
    "term": {
      "likes": {
        "value": 5
      }
    }
  }
}
```

Term provides an exact match on fields that are not text fields, such as numbers, booleans or dates. In this example, we're finding all tweets that have exactly 5 likes.