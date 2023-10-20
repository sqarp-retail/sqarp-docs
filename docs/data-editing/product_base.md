---
sidebar_position: 1
---
# Product base

### Module overview

In this module, products are created in SQARP and are enriched with basic information. Product base is the only module where new products can be created. It is typically the starting module when creating new products.

### Data & definitions

| Data | Definition | Rules & validation |
| --- | --- | --- |
| manufacturer\_article\_number | The manufacturers unique identifier for a product | Can only contain alphanumerical characters and “-“, “\_”, “/”, ”.”, “:”. Each article number must be unique within the organisation. |
| brand\_slug | Reference to an existing brand in SQARP. | The brand must be owned by the same organisation as the product. A product can only have one brand reference. |
| taric\_code | The EU tariff code for the product. | Must be 10 numerical characters. Validated towards EU database. See https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric\_en |
| country\_of\_origin | The country of origin for the product. | Must be 2 uppercased alphabetical characters. Validated towards ISO 3166-1 alpha-2 standard. |
| manufacturer\_product\_url | The URL to the manufacturer’s product page for the corresponding product | Only filled when applicable. Must be valid URL. Validated for 200 response. |
| identifier\_[identifier slug] | The identifier value for a certain external identifier. | List of available identifiers and corresponding validation rules can be found here. |

:::info SQARP GOLD STANDARD: MANUFACTURER ARTICLE NUMBER


**Gold standard rule**: Manufacturer article numbers should only contain alphanumeric characters and “-“, “\_”. At least one character should be non-numeric. Article numbers should be maximum 20 characters.

**Gold standard reasoning**: When moving data between systems, you want to avoid article numbers becoming distorted. When you use only numeric characters, there is a risk of codes being interpreted as numeric values. This can distort the actual numbers (especially if there is leading zeros) but it can also make codes difficult to map between databases since they risk being read as different data types in different systems. Moreover, you want to avoid to long article numbers and special characters to make sure they’re compliant for storing in most ERP systems.
:::

### Identifier

<iframe width="100%" height="500" src="https://sqarp.retool.com/embedded/public/4082b842-e128-4fe6-a3e9-513074a43181" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- ### How to generate the editing template from SQARP

[Insert description for how to generate template] -->

### How to use the editing template

<iframe width="100%" height="500" src="https://www.youtube.com/embed/J8lwKXjCoJ8?si=QOWXuhQ0aBkhlzfb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Each row in the editing template represents a product.

### Products affected

Only the products included in the template will be affected upon upload.

If new rows with article numbers have been added to the template, this will be created as new products in SQARP.

If a product is not included in the template upon upload, that product will not be affected.
:::danger
To remove a product from SQARP entirely, you’ll have to use the DELETE PRODUCT module.
:::
### Data affected

The manufacturer\_article\_number column is mandatory, the rest of the columns are optional.

If a column is removed from the template, the existing data in SQARP will remain unchanged upon upload.

For the products included in the template, the value (including blank values) will be the value for that data and product in SQARP upon upload.

For identifiers, you can include all the identifiers that are applicable. The template export will include all identifiers that are currently available for the included products in SQARP. To add a new identifier, insert a column to the right in the template and set identifier\_[identifier slug] (where identifier slug is replaced with the appropriate slug for the identifier you wish to include, for example “identifier\_ean”) as the column header. Then fill the identifier values for each product.

Only the identifiers included as column headers will be affected upon upload.