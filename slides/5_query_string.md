# Query string

```
{
	"query": {
		"query_string": {
			"fields": [
				"content"
			],
			"query": "bac*"
		}
	}
}
```

Query string also is used to perform full text searches on documents, and has the same limitation as match in that it can only search text and keyword fields. However, query_string supports advanced features, such as wildcards. Moreover, more than one field can be searched from a single query. In the above query, we'd find all tweets containing a term starting with the prefix `bac`, such as `back`, or `bachelor`, or `backstreet`.