# Get all

The mapping:

```
http://localhost:9200/twitter?pretty=true
```

```
{
  "twitter" : {
    "aliases" : { },
    "mappings" : {
      "tweet" : {
        "properties" : {
          "content" : {
            "type" : "text",
            "fields" : {
              "keyword" : {
                "type" : "keyword",
                "ignore_above" : 256
              }
            }
          },
          "created_at" : {
            "type" : "date"
          },
          "deleted" : {
            "type" : "boolean"
          },
          "id" : {
            "type" : "text",
            "fields" : {
              "keyword" : {
                "type" : "keyword",
                "ignore_above" : 256
              }
            }
          },
          "likes" : {
            "type" : "long"
          },
          "replies" : {
            "type" : "text",
            "fields" : {
              "keyword" : {
                "type" : "keyword",
                "ignore_above" : 256
              }
            }
          },
          "user" : {
            "properties" : {
              "id" : {
                "type" : "text",
                "fields" : {
                  "keyword" : {
                    "type" : "keyword",
                    "ignore_above" : 256
                  }
                }
              },
              "name" : {
                "type" : "text",
                "fields" : {
                  "keyword" : {
                    "type" : "keyword",
                    "ignore_above" : 256
                  }
                }
              }
            }
          }
        }
      }
    },
    "settings" : {
      "index" : {
        "creation_date" : "1558545466854",
        "number_of_shards" : "1",
        "number_of_replicas" : "0",
        "uuid" : "h1xjNI28Q-CWCn4cDdlUhw",
        "version" : {
          "created" : "6020399"
        },
        "provided_name" : "twitter"
      }
    }
  }
}
```

Search with no query (get all):

```
http://localhost:9200/twitter/_search?pretty=true&q=*:*
```

```
{
  "took": 393,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": 302,
    "max_score": 1.0,
    "hits": [
      {
        "_index": "twitter",
        "_type": "tweet",
        "_id": "31ec8547-f478-428b-a3e2-4332f664e3ae",
        "_score": 1.0,
        "_source": {
          "deleted": false,
          "replies": [
            "Accounts",
            "Pizza FTP",
            "Soft Handmade Cotton Soap",
            "Future-proofed Business-focused",
            "redundant"
          ],
          "created_at": "2018-08-03T02:33:46.006Z",
          "id": "31ec8547-f478-428b-a3e2-4332f664e3ae",
          "user": {
            "name": "Wyatt",
            "id": "cbf4cdc8-8ca9-4854-89f2-d035f545b0dc"
          },
          "content": "back-end Zimbabwe",
          "likes": 20814
        }
      },
      ...
  }
}
```