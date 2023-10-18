---
sidebar_position: 7
---

# Attributes

### Module Overview

In this module, we manage attributes. Attributes is an umbrella term for Unverified Attributes and SQARP Verified Attributes. All attributes are on the product level. Attributes is tabulated product information.

### DATA & DEFINITIONS

The attributes module is divided into two sheets:

- KVS: This is where Unverified Attributes are managed
- Basic attributes: This is where SQARP Verified Attributes are managed.

### UNVERIFIED ATTRIBUTES (KVS)

The unverified attributes template only contains the manufacturer article number as a pre-defined field. All remaining inputs are free.

- **Headers**: Headers are “table headers”, or groupings of attributes. Headers are set on the first row in the template. Several attribute keys can share the same header. Sharing the same header means the attribute keys will be grouped in the same table in the platform. Examples of headers are “Technical specifications”, “Lighting specifications” and “Design specifications”.
- **Keys**: Keys are the attribute keys that define the corresponding values. Keys are set on the second row in the template. All keys must be unique across the template. Examples of keys include “Colour”, “Width” and “Material”.
- **Values**: Values are the attribute values corresponding to the respective keys. Values are set in the grid defined by the products and the keys.

This sheet is language dependent. Additional languages can be added by including multiple sheet where each language is indicated in the sheets name.

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |

### SQARP VERIFIED ATTRIBUTES

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| ba_length_mm | The net length of the product | Can be numeric value AND/OR range of numeric values separated by “-“ AND/OR multiple numeric values separated by “|” |
| ba_height_mm | The net height of the product | Can be numeric value AND/OR range of numeric values separated by “-“ AND/OR multiple numeric values separated by “|” |
| ba_width_mm | The net width of the product | Can be numeric value AND/OR range of numeric values separated by “-“ AND/OR multiple numeric values separated by “|” |
| ba_depth_mm | The net depth of the product | Can be numeric value AND/OR range of numeric values separated by “-“ AND/OR multiple numeric values separated by “|” |
| ba_diameter_mm | The net diameter of the product | Can be numeric value AND/OR range of numeric values separated by “-“ AND/OR multiple numeric values separated by “|” |
| ba_weight_kg | The net weight of the product | Can be numeric value AND/OR range of numeric values separated by “-“ AND/OR multiple numeric values separated by “|” |
| ba_colour | The colour of the product | Must be a defined colour. Multiple colours separated by “|”. The full list of defined colours can be found here. |

### SQARP GOLD STANDARD

### UNVERIFIED ATTRIBUTES (KVS)

- Include units in values rather than keys.
- Keep attribute values short, longer values fit better in description blocks.
- Avoid Boolean key-values.
- Make sure keys and values are consistent across the assortment.
- Make sure both keys and values are designed to be read by humans.

### SQARP VERIFIED ATTRIBUTES

### · A single product should have maximum three values populated out of height, width, depth, length.