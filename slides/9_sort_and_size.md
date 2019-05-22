# Sort and size

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
	]
}
```

Size dictates the amount of results that are to be returned in a given query, and sort dictates the order they should be returned in. `_id` is an internal value in elastic, which should always be the final tiebreaker, as it's given to be unique. Having non-unique tiebreakers may lead to indeterminate results. Typically, the `_id` is the composite primary key of the corresponding cassandra table.