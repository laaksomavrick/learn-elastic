# How does it work?

Elastic translates documents into inverted indexes. This is best illustrated with an example. Imagine three documents:

* Winter is coming.
* Ours is the fury.
* The choice is yours.

Given these documents, elastic would perform some processing via default or user customized analyzers (e.g, lowercasing, removing punctuation) to construct an inverted index, mapping terms to documents.

|  term  | freq | documents |
|--------|:----:|----------:|
| choice |   1  | 3         |
| coming |   1  | 1         |
| fury   |   1  | 2         |
| is     |   3  | 1, 2, 3   |
| ours   |   1  | 2         |
| the    |   2  | 2, 3      |
| winter |   1  | 1         |
| yours  |   1  | 3         |

A search with multiple terms is performed via finding all the terms that match, and returning the corresponding documents. Given this, it's easy to see why we can efficiently find all documents that start with a particular letter (terms are sorted), whereas a query finding all the terms that contain the letter "o" requires a full scan.

There are some tricks to get around this (reversing terms, splitting terms into sub terms called n-grams, hashing).