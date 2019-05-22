# Match

```
{
	"query": {
		"match": {
			"content": "back"
		}
	}
}
```

Match is used to perform full text searches on documents. In this example, we're asking for all tweets whose `content` contains the string `back`, such as `I'm back at the tech summit today #blessed`. Match does not allow for partial matches, wildcards, or other advanced functionality. Match can only analyze text and keyword fields, meaning it cannot be used for dates, booleans, numbers, etc..