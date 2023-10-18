---
sidebar_position: 2
---

# Virtualization

### Module overview

In this module, virtuals are created, basic information are added to the virtuals and products are connected to virtuals. Virtualization is where variant management is done and product titles are set. Virtualization is a language specific module.

### Data & Definitions

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer\_article\_number | The manufacturers unique identifier for a product | Article number must exist in SQARP. |
| internal\_reference | Unique reference for the virtual | Can only contain alphanumerical characters and “-“, “\_”. Each internal reference must be unique within the organization. Mandatory for every virtual. |
| product\_type | A sting indicating the type of product (or category) included in the virtual. Used in the product title. | Must be the same for all rows with the same internal\_reference. Mandatory for every virtual. |
| virtual\_name\_translation | A string indicating the specific features and differentiation for the virtual. | Must be the same for all rows with the same internal\_reference. |
| selectable\_key\_[number] | The header for the selectable key with index [number] | Should only be used if virtual contains more than one product. Must be the same for all rows with the same internal\_reference. Keys with different index numbers within the same virtual must be unique. |
| selectable\_value\_[number] | The selectable value for the particular product relating to the key with index [number]. | Should only be used if virtual contains more than one product. The combination of selectable values across all indices must be unique for every product within a virtual. |
| selectable\_image\_[number] | URL to a swatch image corresponding to the selectable value for the particular product. | Should only be used if virtual contains more than one product. Must be valid URL to an image file. Must be the same image for all products with the same selectable value for each index number. |

### SQARP GOLD STANDARD

### INTERNAL REFERENCES

The internal reference should be set so that the virtual is recognizable from the reference itself. When editing data in SQARP, you will frequently need to reference these codes. This task will be made much easier if codes are recognizable. A good rule of thumb can be to use the following structure: [BRAND]-[TYPE]-[DISTINGUISHER]. For example, “SQARP-LAWN-MOWER-SE400”.

It is customary in SQARP to use uppercased letters and hyphens in internal references.

### VIRTUAL GROUPINGS

You can flexibly configure virtuals in SQARP and most brands have a strong sense of how virtuals should be constructed. Here we give some generic best-practices.

- Products that look very different visually should generally not be grouped into the same virtual. That risks leading to products becoming “hidden” from a customer in a site list and risk underexposing your assortment.
- Product that have significant differences in price and technical specifications should generally not be grouped together. That risks confusing the customer when browsing an assortment.
- If a brands total number of products is small, you should group products less frequently and use smaller virtual groups. If a brands total number of products is large, you should group products more frequently and into larger virtual groups.

### PRODUCT TYPE

The product type of the virtual must be relevant for all products included in the virtual group.

The product type should be specific enough so that a customer can understand what product they are looking at.

The product type should include specific context where necessary. For example: “Screw” is not a helpful product type whereas “Screw for door handle” is.

Product types should be consistent across a brands assortment. Meaning if “Nail Polish” is a product type in your assortment, you shouldn’t have another product type called “Nail polish” or “Polish for Nails”. Consistency will help customers make sense of the assortment.

Product types should be set with regard to consumer search patterns. Product types are used in titles which, if built thoughtfully, are effective at driving search traffic. Research what words are used by consumers when searching for your particular products and incorporate the findings into your product types. For example, “Gaming Chair” might be a better product type than “Computer Chair” or “Office Chair”.

Product types should not include features. Don’t include the colour, material, size, or other features of the product in the product type. These are left for virtual names.


:::info Style guide for product types
- Use only standard characters to the greatest extent possible – you never know what non-standard characters will look like in other systems and websites.
- Emphasize the important words by using uppercased letters in the beginning of the word. Begin other words, such as “for”, “with”, “in” with lowercased letters.
- Keep types concise, when you cross 25 characters, you better have a good explanation for why such a long type is necessary.
:::
### Virtual name

Virtual names should distinguish different virtuals that have the same product type from each other.

Virtual names should be consistent within the context of product types. For example, if one virtual has virtual name “Blue 100 cm” and another with the same product type has virtual name “Blue”, then yes, they are unique, but they are not consistent. Keep consistency by calling them “Blue 100 cm” and “Blue 200 cm” respectively. In general, try to keep the same theme for how virtual names are structured within product types.

Virtual names should include the most important keywords. Since virtual names are part of the title for products, it’s important to include words that customers use when searching for products in the title. These keywords should be added even if they’re not necessary for distinguishing virtuals from one another.

:::info STYLE GUIDE FOR virtual names:

- Use only standard characters to the greatest extent possible – you never know what non-standard characters will look like in other systems and websites
- Emphasize the important words by using uppercased letters in the beginning of the word. Begin other words, such as “for”, “with”, “in” with lowercased letters.
- Include units in virtual names “100 cm” is better than “100”. Use space to separate the value from its unit.
- Don’t include the name of the brand
- Use “.” Instead of “,” for decimals
- Avoid the use of commas in virtual names
:::
### SELECTABLES

Keep selectable keys and values stringent across the assortment. Don’t use “Length (mm)” for one virtual and “Length” for another.

Avoid incomplete selections. When using multiple selectables, make sure they are harmonized so that the customer always makes the number of choices as there are selectables. For example, there are 4 products in a virtual “Green Cotton”, “Blue Cotton”, “Red Cotton” and “Green Silk”. If you use two selectables, “Color” and “Material” you will not get a harmonized choice – because if a customer selects the material “Silk”, then they have already made the complete selection. In this case, it is better to give the customer one selectable “Type” or “Model” and get all the options in one selectable.

If you have the choice, build fewer selectables. You want to make a customers configuration on a product page as easy as possible, but you also want to minimize the number of clicks required before the customer can add a product to their cart. If you are wondering whether to add an additional selectable, the answer is most likely no.

Make sure the selectable values stand on their own. You don’t want to make the values dependent on the keys since the keys will not be available in all applications. Say for example that you have a lamp that is available with and without dimmer. It might be tempting to set the key “Has dimmer” and the values “Yes” and “No”. But these values make no sense without the key. Instead, set the key to “Model” or “Dimmer” and the values to “With Dimmer” and “Without Dimmer”.

Always include units in selectable values. Never “100”, always “100 mm”.

Set selectables that consumers can relate to. Include the extra explanation to make the choice easy for consumers. If your selling a radiator, it might be tempting to use “5 kW” as the selectable value, but “5 kW (5-10 m3)” is much more useful for the customer.

Don’t get to specific on the keys. Since the values should stand on their own, it’s better to use keys that are easy to understand to avoid confusing the customer.

Use swatches every chance you get. They make for a much better consumer experience.

:::info STYLE GUIDE FOR SELECTABLES

- If multiple text-values (colors for example) should be fit into the same selectable value, use “/” as separator
- If multiple measurements should be fit into the same selectable values, use “x” as separator if they are in the same unit.
- Don’t begin a selectable value with a lowercased letter.
- Use blanks to separate measurements from units.
- Use standard characters.
:::
### Product title

**The concatenation of Product type + Brand + Virtual name must always be unique** across the organisation’s assortment. This is the unique virtual titles rule in SQARP.

**The concatenation of Product type + Brand + Virtual name + Selectable values must always be unique** across the organisation’s assortment. This is the unique product titles rule in SQARP.

### How to use the editing template

Each sheet in the virtualization template represents virtualization in one language. You can add multiple sheets to the template representing different languages. Indicate the appropriate language in the sheet name using lowercased ISO 3166-1 alpha-2 codes.

Each row in the virtualization template represents one product.

Virtuals are defined in the internal reference, product type and virtual name columns.

Virtualization is the only module where new virtuals can be created. Virtuals must always have product related to them upon creation.

The relation between products and virtuals are defined in the mapping between manufacturer article numbers and internal references.

A virtual with several products related to it will be duplicated at the same number of rows as there are products associated with the virtual. The internal reference, product type and virtual name must be the same on all of those rows.

Selectables should only be used if there is more than one product related to the virtual.

The selectables are used to distinguish the products within a virtual. There is no limit to the number of selectables that can be added to a virtual. For each selectable that has been defined, each product within a virtual must have the same selectable key. If one selectable is used, each product within the virtual must have a unique selectable value. If multiple selectables are used, the combination of all selectable values must be unique for each product within a virtual.

Selectable images must contain image URLs. Selectable images must correspond 1-1 with the selectable values within a selectable.

Only the virtuals included in the template will be affected upon upload. For virtuals that are included, the data in the template will be master, meaning that all products associated with a virtual must always be included in the template.

To add a new product to an existing virtual, indicate the appropriate internal reference and add the product type and virtual name of the virtual. Then match the existing selectable structure to the new product. The new product must have the same selectable keys as the products that already exist on that product, and the selectable values must be unique in relation to the existing products on that virtual.

To add new selectables, create new columns to the right. You need three columns for each new selectable created: selectable\_key\_X, selectable\_value\_X and selectable\_image\_X. X should be substituted for the appropriate index number for the selectable.