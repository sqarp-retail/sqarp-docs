---
sidebar_position: 4
---
# Inspirationals

## Module Overview

In this module, inspirational entities and their relations to products are managed. Inspirational entities is the collective term for Series, USPs and Models in SQARP. This module is language dependent.

## Data & Definitions

The inspirational template is divided into six sheets:

- **Inspirationals**: This is where inspirationals are created and basic information about inspirationals is managed
- **Images**: Inspirational images are managed here
- **Documents**: Inspirational documents are managed here
- **Videos**: Inspirational videos are managed here
- **Descriptions:** Descriptions for inspirational entities are managed here
- **Product-Inspirationals:** Relations between products and inspirational entities are managed here

### Inspirationals

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the inspirational. |
| inspirational_type | Indication for the type of inspirational. | Mandatory. Allowed values are “series”, “usp” and “model”. |
| inspirational_slug | Unique identifier for the inspirational entity. | Mandatory. Can only contain alphanumerical characters and “-“, “_”. Each inspirational slug must be unique within the organization. |
| inspirational_translation_[lang] | The public name of the inspirational entity in the language specified by the language code. | Mandatory. |
| landing_page_url | The URL to the manufacturer’s landing page for the corresponding inspirational | Only filled when applicable. Must be valid URL. Validated for 200 response. |

### Images

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the inspirational. |
| inspirational_type | Indication for the type of inspirational. | Mandatory. Allowed values are “series”, “usp” and “model”. |
| inspirational_slug | Unique identifier for the inspirational entity. | Must match an inspirational slug in the “Inspirationals” sheet or existing inspirational in SQARP. |
| image_url | URL to one image file. | Must be valid URL to an image file. Validated for 200 response. |

### Documents

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the inspirational. |
| inspirational_type | Indication for the type of inspirational. | Mandatory. Allowed values are “series”, “usp” and “model”. |
| inspirational_slug | Unique identifier for the inspirational entity. | Must match an inspirational slug in the “Inspirationals” sheet or existing inspirational in SQARP. |
| document_url | URL to one document file. | Must be valid URL to a document file. Validated for 200 response. |
| document_type | Indication of the type of document | Must be valid document type. List of available document types and corresponding definitions can be found here. |
| document_language_code | Indication of the document language. | Lowercased ISO 639-1 Code |

### Videos

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the inspirational. |
| inspirational_type | Indication for the type of inspirational. | Mandatory. Allowed values are “series”, “usp” and “model”. |
| inspirational_slug | Unique identifier for the inspirational entity. | Must match an inspirational slug in the “Inspirationals” sheet or existing inspirational in SQARP. |
| video_url | URL to one externally hosted video. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |
| video_type | Indication of the type of video | Must be valid video type. List of available video types and corresponding definitions can be found here. |
| video_language_code | Indication of the spoken video language. | Lowercased ISO 639-1 Code |

### Descriptions

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| brand_slug | Reference to an existing brand in SQARP. | Mandatory. The brand must be owned by the same organisation as the inspirational. |
| inspirational_type | Indication for the type of inspirational. | Mandatory. Allowed values are “series”, “usp” and “model”. |
| inspirational_slug | Unique identifier for the inspirational entity. | Must match an inspirational slug in the “Inspirationals” sheet or existing inspirational in SQARP. |
| header | Header to one description block | Cannot contain html, line breaks or other text formatting. |
| description | Body of one description block | Cannot contain html, line breaks or other text formatting |
| bullets | Bullet points of one description block (pipe-separated) | Cannot contain html, line breaks or other text formatting. “|” is used as separator between bullet points. |
| description_image_url | URL to one image file corresponding to one description block. | Must be valid URL to an image file. Validated for 200 response. |
| description_video_url | URL to one externally hosted video corresponding to one description block. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |

### Product-inspirationals

[AVVAKTA NY IMPLEMENTATION I MALLEN]
## SQARP Gold Standard
:::caution SQARP Gold Standard


- Set inspirational slugs that make it possible to identify the entity only using the slug.
- All static marketing content that is relevant for consumer e-commerce presentation should be stored on inspirational entities in SQARP.
- All inspirational entities should have at least one image.
- All inspirational entities should have at least one description block.
- Descriptions should be written in a way that it makes sense to display them on associated product pages.
- All inspirational entities should have associated products.
:::
## How to use the editing template

### Inspirationals

Each row represents one inspirational entity.

Reference to a brand, inspirational type and inspirational slugs are mandatory.

You can add inspirational translations in multiple languages by inserting new columns and setting the header to inspirational_translation_XX where XX is the language code of the language you wish to include.

To add a new inspirational, create a new row in the template and fill with appropriate data.

To change or remove information on an inspirational, change or remove the information in the appropriate cells.

Only the inspirationals included in the template will be affected by the change upon upload.

### Images

Each row represents one image.

The URL must be a path to an image file. Each inspirational can have none, one or several images.

To add several images to the same inspirational, you create several rows with the same inspirational slug, brand reference and inspirational type.
:::tip
The order of the images matter and will have the same order in the SQARP platform as they have in the sheet.
:::
To add a new image, simply add a new row, identify the inspirational entity you want to add the image to using the slug for the inspirational, the reference to the brand and the inspirational type. Finally, add the URL.

To remove an image from an inspirational that currently has several images, remove the whole row for that image. To remove an image from an inspirational that has one image, remove only the image URL.

To change the order of images, change the order of the rows, so that the image you want as primary appears first and so on.

Only the inspirationals included in the template will be affected by the change upon upload.

### Documents

Each row represents one document.

The URL must be a path to a document file. Each inspirational can have none, one or several documents.

To add several documents to the same inspirational, you create several rows with the same inspirational slug, brand reference and inspirational type.

To add a new document, simply add a new row, identify the inspirational entity you want to add the document to using the slug for the inspirational, the reference to the brand and the inspirational type. Finally, add the URL, document type and language.

To remove a document from an inspirational that currently has several documents, remove the whole row for that document. To remove a document from an inspirational that has one document, remove only the document URL, document type and language.

Only the inspirationals included in the template will be affected by the change upon upload.

### Videos

Each row represents one video.

The URL must be a path to an externally hosted video. Each inspirational can have none, one or several videos.

To add several videos to the same inspirational, you create several rows with the same inspirational slug, brand reference and inspirational type.

To add a new video, simply add a new row, identify the inspirational entity you want to add the video to using the slug for the inspirational, the reference to the brand and the inspirational type. Finally, add the URL, video type and language.

To remove a video from an inspirational that currently has several videos, remove the whole row for that video. To remove a video from an inspirational that has one video, remove only the video URL, video type and language.

Only the inspirationals included in the template will be affected by the change upon upload.

### Descriptions

Each row represents one description block.

Each description block can consist of a header, description, bullets, image and video.

Each description block must be filled in either description or bullets - but can of course have data in all columns.

Each inspirational can have none, one or several description blocks.

To add several description blocks to the same inspirational, you create several rows with the same inspirational slug.

Remember that the order of description blocks matter and will have the same order in the SQARP platform as in this sheet.

To add a new description block, simply add a new row, identify the inspirational entity you want to add the description block to using the slug for the inspirational, the inspirational type and the reference to the brand. Then add the contents to the description block.

To remove a description block from an inspirational that currently has several description blocks, remove the whole row for that block.

To remove a description block from an inspirational that has one description block, remove all data except the brand reference, the inspirational type and the inspirational slug.

To change the order of description blocks, change the order of the rows, so that the block you want as primary appears first, and so on.

Only the inspirationals included in the template will be affected by the change upon upload.

### Product Inspirationals

[AVVAKTA NY IMPLEMENTATION I MALLEN]