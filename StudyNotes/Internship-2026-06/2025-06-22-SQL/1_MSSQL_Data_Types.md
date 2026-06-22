### Numerics
| Data Type | Range | Storage | Use Case |
| --- | --- | --- | --- |
| tinyint | 0 to 255 | 1 byte |  |
| smallint | -32,768 to 32,767 | 2 byte | |
| int | -2^31 to 2^31 - 1 | 4 byte | |
| bigint | -2^63 to 2^63 - 1 | 8 byte | |
| bit | 0, 1 or NULL | 1 bit | boolean cases |
| decimal(p, s) | p = total digits, s = decimals | 5 to 17 bytes | when exact precision is required |
| real | Approximate (7 digit precision) | 4 bytes | when exact precision isn't required |
| float | Approximate (15 digit precision) | 8 bytes | when exact precision isn't required |
| money | -922,337,203,685,477.5808 to 922,337,203,685,477.5807 | 8 bytes | currency, can use currency prefixes |

### Character Strings
(n prefix means unicode which supports international chars. they take twice the storage per char)
| Data Type | Storage Method | Capacity | Use Case |
| --- | --- | --- | --- |
| char(n) | fixed length | 1 to 8000 chars (8000 bytes) | Exact-length data, country codes ect. |
| varchar(n) | variable length | 1 to 8000 chars | Variable-length text, name email ect. |
| varchar(max) | variable length | up to 2GB | Very long text, articles ect. |
| nchar(n) | fixed length | 1 to 4000 chars (8000 bytes) | Exact-length international text |
| nvarchar(n) | variable length | 1 to 4000 chars | Variable-length international text |
| nvarchar(max) | variable length | up to 2GB | Very long international text |

### Date and Time
| Data Type | Range | Storage | Format | Use Case |
| --- | --- | --- | --- | --- |
| date | 0001-01-01 to 9999-12-31 | 3 bytes | YYYY-MM-DD | Only Dates |
| time | 00:00:00 to 23:59:59.9999999 | 3 to 5 bytes | hh:mm:ss:nnnnnnn | Only Times |
| datetime2 | 0001-01-01 to 9999-12-31 | 6 to 8 bytes | YYYY-MM-DD hh:mm:ss.nnnnnnn (Higher precision) | Standart |
| datetime | 1753-01-01 to 9999-12-31 | 8 bytes | YYYY-MM-DD hh:mm:ss.nnn (Lower precision) | Decrepated |
| datetimeoffset | 0001-01-01 to 9999-12-31 | 8 to 10 bytes | YYYYY-MM-DD hh:mm:ss.nnnnnnn [+/-]hh:mm | Timezone aware apps|
| smalldatetime | 1900-01-01 to 2079-06-06 | 4 bytes | YYYY-MM-DD hh:mm:00 | Minute accuracy, saves space |

Binary Strings:
binary
varbinary
image

Other:
cursor
geography
geometry
hierarchyid
json
vector
rowversion
sql_variant
table
uniqueidentifier
xml