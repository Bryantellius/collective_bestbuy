#### Routes

- `GET /api/v1/products`
- List returns an array `[{...}]`
- Use `getAll('products')`

- `GET /api/v1/employees`
- List returns an array `[{...}]`
- Use `getAll('employees')`

- `GET /api/v1/sales`
- List returns an array `[{...}]`
- Use `getAll('sales')`

- `GET /api/v1/sales/report`
- List returns an array `[{...}]`
- Use `getSalesReport()`

- `GET /api/v1/products/:id`
- Single returns the object `{...}`
- Use `getOne('products', :id)`

- `GET /api/v1/employees/:id`
- Single returns the object `{...}`
- Use `getOne('employees', :id)`

- `GET /api/v1/sales/:id`
- Single returns the object `{...}`
- Use `getOne('sales', :id)`

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

#### Sales Report

- Array of objects for sale totals per products

```
{
    "ProductID": number,
    "Name": string,
    "Price": decimal,
    "Quantity": number,
    "Gross": decimal
}
```
