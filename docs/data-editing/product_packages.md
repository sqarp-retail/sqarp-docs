---
sidebar_position: 2
---

# Product packages

### Module Overview

In this module, package information is added to existing products in SQARP. Currently, only primary packages can be added to products. One product can have several packages/parcels.

### Data & Definitions

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for a product | Article number must exist in SQARP. |
| package_height_mm | The hight of the package in millimetres. | Must be numerical |
| package_width_mm | The width of the package in millimetres. | Must be numerical |
| package_depth_mm | The depth of the package in millimetres. | Must be numerical |
| package_volume_m3 | The volume of the package in cubic meters. | Must be numerical |
| package_weight_kg | The weight of the package in kilograms. | Must be numerical |

### How to use the editing template

<iframe width="100%" height="500" src="https://www.youtube.com/embed/croudmjwBPs?si=T2ye1gK1b0n9GrxX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Each row in the editing template represents a package.

Only the products included in the template will be affected by the upload.

To add multiple packages to one product, include the product on multiple rows in the template, each row represents a package and can have different data.
:::danger
To remove a package from a product with multiple packages, you remove the entire row representing the package you want to remove.

To remove a package from a product with one package. Remove all data from the row except for the manufacturer_article_number.
:::
For the products included in the template, the package information will be changed to what is represented in the template upon upload.
:::note
All columns in the template are mandatory upon upload.
:::