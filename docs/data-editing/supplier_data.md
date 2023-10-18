---
sidebar_position: 8
---

# Supplier data

### Module overview

In this module, we manage supplier data for products. One product can have several sets of supplier data. This module is one sheet and is lan
### Data & definitions

The product relations module is divided into two different templates: Product Relations and Addon Categories.

| Data | Definition | Rules & validation |
| --- | --- | --- |
| organisation\_slug | Identifier for the organisation that owns the product. | Must be an active organisation in SQARP. |
| manufacturer\_article\_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| market\_slug | Identifier for the market the supplier data refers to | Must be ISO Alpha-3 code |
| supplier\_article\_number | The suppliers unique identifier for the product | - |
| supplier\_product\_url | URL to the corresponding product page on the suppliers website | Must be valid URL. Validated for 200 response. |
| supplier\_product\_title\_[lang] | The suppliers name for the product in the specified language | - |
| supplier\_partner\_pricing\_unit\_slug | The unit in which the product is priced | Must be valid unit. List of available units can be found here. |
| supplier\_partner\_packaging\_unit\_slug | The unit in which the product is packaged | Must be valid unit. List of available units can be found here. |
| supplier\_partner\_pricing\_multiple | The number of pricing units per packaging unit. | Must be positive numeric value. |
| supplier\_minimum\_order\_quantity | The minimum number of pricing units that must be purchased in a single order. | Must be positive numeric value. |
| supplier\_max\_delivery\_time | The maximum delivery time of the product in business days. | Must be positive integer. |
| supplier\_delivery\_notes\_[lang] | Delivery notes for the product in the specified language. | - |
| supplier\_recommended\_price\_unit\_slug | The unit corresponding to the recommended retail price of the product. | Must be valid unit. List of available units can be found here. |
| supplier\_recommended\_price\_currency\_slug | The currency corresponding to the recommended retail price of the product. |  |
| status | The products current status. | Allowed values are “ACTIVE”, “INACTIVE”, “DISCONTINUED”, “UNRELEASED” |
| release\_date | The planned release date for the product | Must be on the format YYYY-MM-DD |
| discontinued\_date | The planned discontinuation date for the product | Must be on the format YYYY-MM-DD |guage dependent.
