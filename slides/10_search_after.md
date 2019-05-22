# Search after (paging)

```
{
  "size": 50,
  "sort": [
    {
      "created_at": "asc"
    },
    {
      "_id": "desc"
    }
  ],
  "search_after": [
    1527781710825,
    "09511592-e876-4297-983b-cdc1cb079bb3"
  ]
}
```

Search_after provides functionality for pagination in elastic queries. It must correlate one to one with the sort order of a given query. In this query, we're asking for all results created after the unix timestamps `15277...`, where the `_id` is greater than the shown uuid.