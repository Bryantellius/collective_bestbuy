#### Routes

- `GET /api/v1/{products/sales/employees}{:id?}`
- List returns an array `[{...}]`
- Single returns the object `{...}`

#### DB Function Names

- EX: getOne(tableName, id) or getAll(tableName)

#### Employee Object

```
{
    "EmployeeID": 32768,
    "FirstName": "Robert",
    "MiddleInitial": "E",
    "LastName": "Ahlering",
    "EmailAddress": "robert1@notreallybestbuy.com",
    "PhoneNumber": "678-555-0175",
    "Title": "Production Technician - WC10",
    "DateOfBirth": "1971-10-01T05:00:00.000Z"
}
```
