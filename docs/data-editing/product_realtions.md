---
sidebar_position: 4
---
# Product relations

### Module overview

In this module, we manage product relations in SQARP. Product relations is a collective word for the four relation types available in SQARP: Accessories, Spare parts, Components and Addons. Associated with addons are Addon Categories which are also covered in this module.

The relation templates are not language dependent. The addon category template is language dependent.

### DATA & DEFINITIONS

The product relations module is divided into two different templates: Product Relations and Addon Categories.

### PRODUCT RELATIONS TEMPLATE

- Accessories: Accessory relations are managed here
- Spare Parts: Spare part relations are managed here
- Components: Component relations are managed here
- Addons: Addon relations are managed here

### ACCESSORIES

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the main product | Article number must exist in SQARP. |
| related_manufacturer_article_number | The manufacturers unique identifier for the related product | Article number must exist in SQARP. |

### SPARE PARTS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the main product | Article number must exist in SQARP. |
| related_manufacturer_article_number | The manufacturers unique identifier for the related product | Article number must exist in SQARP. |

### COMPONENTS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the main product | Article number must exist in SQARP. |
| related_manufacturer_article_number | The manufacturers unique identifier for the related product | Article number must exist in SQARP. |
| quantity | The number of units of the related product included in the relations | Must be positive numeric value |

### ADDONS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the main product | Article number must exist in SQARP. |
| related_manufacturer_article_number | The manufacturers unique identifier for the related product | Article number must exist in SQARP. |
| quantity | The number of units of the related product included in the relations | Must be positive numeric value |
| addoncategory_slug | Reference to an addon category | Addon category must exist in SQARP |

### ADDON CATEGORIES TEMPLATE

- **Addon categories**: This is where addon categories are created and basic information about them is managed
- **Images**: Addon category images are managed here
- **Documents**: Addon category documents are managed here
- **Videos**: Addon category videos are managed here
- **Descriptions:** Descriptions for addon categories are managed here

### ADDON CATEGORIES

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the inspirational. |
| addoncategory_slug | Unique identifier for the addon category entity. | Mandatory. Can only contain alphanumerical characters and “-“, “_”. Each addon category slug must be unique within the organization. |
| addoncategory_translation_[lang] | The public name of the addon category in the language specified by the language code. | Mandatory. |
| landing_page_url | The URL to the manufacturer’s landing page for the corresponding addon category | Only filled when applicable. Must be valid URL. Validated for 200 response. |

### IMAGES

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the addon category. |
| addoncategory_slug | Unique identifier for the addon category entity. | Must match an addon category slug in the “Addon category” sheet or existing addon category in SQARP. |
| image_url | URL to one image file. | Must be valid URL to an image file. Validated for 200 response. |

### DOCUMENTS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the addon category. |
| addoncategory_slug | Unique identifier for the addon category. | Must match an addon category slug in the “Addon category” sheet or existing addon category in SQARP. |
| document_url | URL to one document file. | Must be valid URL to a document file. Validated for 200 response. |
| document_type | Indication of the type of document | Must be valid document type. List of available document types and corresponding definitions can be found here. |
| document_language_code | Indication of the document language. | Lowercased ISO 639-1 Code |

### VIDEOS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the addon category. |
| addoncategory_slug | Unique identifier for the addon category. | Must match an addon category slug in the “Addon category” sheet or existing addon category in SQARP. |
| video_url | URL to one externally hosted video. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |
| video_type | Indication of the type of video | Must be valid video type. List of available video types and corresponding definitions can be found here. |
| video_language_code | Indication of the spoken video language. | Lowercased ISO 639-1 Code |

### DESCRIPTIONS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the addon category. |
| addoncategory_slug | Unique identifier for the addon category. | Must match an addon category slug in the “Addon category” sheet or existing addon category in SQARP. |
| header | Header to one description block | Cannot contain html, line breaks or other text formatting. |
| description | Body of one description block | Cannot contain html, line breaks or other text formatting |
| bullets | Bullet points of one description block (pipe-separated) | Cannot contain html, line breaks or other text formatting. “|” is used as separator between bullet points. |
| description_image_url | URL to one image file corresponding to one description block. | Must be valid URL to an image file. Validated for 200 response. |
| description_video_url | URL to one externally hosted video corresponding to one description block. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |

### SQARP GOLD STANDARD

- Build relations in one direction, from the main product to the related product. It’s generally not a good idea to also build it the other way around.
- Include an appropriate description of addon categories to guide the customer through the selection of addons.
- Build addon categories functionally, not just using product types
- It’s great to add some generic accessories that are appropriate to recommend along with the main product. Don’t include to many though, five is a good benchmark for these kinds of generic accessories.

### HOW TO USE THE EDITING TEMPLATE

### PRODUCT RELATIONS TEMPLATES

### ACCESSORIES AND SPARE PARTS

Accessories and spare parts are two different sheets independent of one another that have the same structure.

Each row represents one relation.

A product can have none, one or several relations.

To add a new relation, add a new row and fill the relevant article numbers for the main product and the related product.

To remove a relation from a product that has multiple relations, remove the whole row representing that relation.

To remove a relation from a product that has one relation, remove only the related manufacturer article number.

Only the products included in the template will be affected by the change upon upload.

### COMPONENTS

Each row represents one relation.

A product can have none, one or several relations.

To add a new relation, add a new row and fill the relevant article numbers for the main product, the related product and the quantity.

To remove a relation from a product that has multiple relations, remove the whole row representing that relation.

To remove a relation from a product that has one relation, remove the related manufacturer article number and the quantity.

Only the products included in the template will be affected by the change upon upload.

### ADDONS

Each row represents one relation.

A product can have none, one or several relations.

To add a new relation, add a new row and fill the relevant article numbers for the main product, the related product, the quantity and the addon category.

To remove a relation from a product that has multiple relations, remove the whole row representing that relation.

To remove a relation from a product that has one relation, remove the related manufacturer article number, the quantity and the addon category.

Only the products included in the template will be affected by the change upon upload.

### ADDON CATEGORY TEMPLATES

### ADDON CATEGORIES

Each row represents one addon category.

Reference to a brand and addon category slugs are mandatory.

You can add addon category translations in multiple languages by inserting new columns and setting the header to addoncategory_translation_XX where XX is the language code of the language you wish to include.

To add a new addon category, create a new row in the template and fill with appropriate data.

To change or remove information on an addon category, change or remove the information in the appropriate cells.

Only the addon categories included in the template will be affected by the change upon upload.

### IMAGES

Each row represents one image.

The URL must be a path to an image file. Each addon category can have none, one or several images.

To add several images to the same addon category, you create several rows with the same addon category slug and brand reference.

The order of the images matter and will have the same order in the SQARP platform as they have in the sheet.

To add a new image, simply add a new row, identify the addon category you want to add the image to using the slug for the addon category and the reference to the brand. Finally, add the URL.

To remove an image from an addon category that currently has several images, remove the whole row for that image. To remove an image from an addon category that has one image, remove only the image URL.

To change the order of images, change the order of the rows, so that the image you want as primary appears first and so on.

Only the addon categories included in the template will be affected by the change upon upload.

### DOCUMENTS

Each row represents one document.

The URL must be a path to a document file. Each addon category can have none, one or several documents.

To add several documents to the same addon category, you create several rows with the same addon category slug and brand reference.

To add a new document, simply add a new row, identify the addon category you want to add the document to using the slug for the addon category and the reference to the brand. Finally, add the URL, document type and language.

To remove a document from an addon category that currently has several documents, remove the whole row for that document. To remove a document from an addon category that has one document, remove only the document URL, document type and language.

Only the addon categories included in the template will be affected by the change upon upload.

### VIDEOS

Each row represents one video.

The URL must be a path to an externally hosted video. Each addon category can have none, one or several videos.

To add several videos to the same addon category, you create several rows with the same addon category slug and brand reference.

To add a new video, simply add a new row, identify the addon category you want to add the video to using the slug for the addon category and the reference to the brand. Finally, add the URL, video type and language.

To remove a video from a addon category that currently has several videos, remove the whole row for that video. To remove a video from an addon category that has one video, remove only the video URL, video type and language.

Only the addon categories included in the template will be affected by the change upon upload.

### DESCRIPTIONS

Each row represents one description block.

Each description block can consist of a header, description, bullets, image and video.

Each description block must be filled in either description or bullets - but can of course have data in all columns.

Each addon category can have none, one or several description blocks.

To add several description blocks to the same addon category, you create several rows with the same addon category slug.

Remember that the order of description blocks matter and will have the same order in the SQARP platform as in this sheet.

To add a new description block, simply add a new row, identify the addon category you want to add the description block to using the slug for the addon category and the reference to the brand. Then add the contents to the description block.

To remove a description block from an addon category that currently has several description blocks, remove the whole row for that block.

To remove a description block from an addon category that has one description block, remove all data except the brand reference and the addon category slug.

To change the order of description blocks, change the order of the rows, so that the block you want as primary appears first, and so on.

Only the addon categories included in the template will be affected by the change upon upload.