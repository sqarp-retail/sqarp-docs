---
sidebar_position: 0
---
# Brands

## Module overview

In this module, brands are managed.  This module is language dependent. It is typically the starting module when creating completly new assortments.

## Data & definitions

The brand template is divided into six sheets:

- **Brands**: This is where brands are created and basic information about brands is managed
- **Images**: brand images are managed here
- **Documents**: brand documents are managed here
- **Videos**: brand videos are managed here
- **Descriptions:** Descriptions for brand entities are managed here
- **Product-brands:** Relations between products and brand entities are managed here

### Brands
| Data | Definition | Rules & validation |
| --- | --- | --- |
| brand\_type | Indication for the type of brand. | Mandatory. Allowed values are “series”, “usp” and “model”. |
| brand\_slug | Unique identifier for the brand entity. | Mandatory. Can only contain alphanumerical characters and “-“, “\_”. Each brand slug must be unique within the organization. |
| brand\_translation\_[lang] | The public name of the brand entity in the language specified by the language code. | Mandatory. |
| landing\_page\_url | The URL to the manufacturer’s landing page for the corresponding brand | Only filled when applicable. Must be valid URL. Validated for 200 response. |

### Images

| Data | Definition | Rules & validation |
| --- | --- | --- |
| brand\_name\_slug | Reference to a brand in the brand sheet | Mandatory.|
| image\_url | URL to one image file. | Must be valid URL to an image file. Validated for 200 response. |

### Documents

| Data | Definition | Rules & validation |
| --- | --- | --- |
| brand\_name\_slug | Reference to an existing brand in SQARP. | Mandatory.|
| document\_url | URL to one document file. | Must be valid URL to a document file. Validated for 200 response. |
| document\_type | Indication of the type of document | Must be valid document type.|
| document\_language\_code | Indication of the document language. | Lowercased ISO 639-1 Code |
#### Available document types 
<iframe width="100%" height="400" src="https://sqarp.retool.com/embedded/public/264d0665-1b4e-4320-a2a0-d7a5765ade0d" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Videos

| Data | Definition | Rules & validation |
| --- | --- | --- |
| brand\_name\_slug | Reference to an existing brand in SQARP. | Mandatory.|
| video\_url | URL to one externally hosted video. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |
| video\_type | Indication of the type of video | Must be valid video type.|
| video\_language\_code | Indication of the spoken video language. | Lowercased ISO 639-1 Code |
#### Available video types 
<iframe width="100%" height="600" src="https://sqarp.retool.com/embedded/public/a8c12b08-68fe-4697-8ba9-9bfa7ea6be8f" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Descriptions

| Data | Definition | Rules & validation |
| --- | --- | --- |
| brand\_name\_slug | Reference to an existing brand in SQARP. | Mandatory. |
| header | Header to one description block | Cannot contain html, line breaks or other text formatting. |
| description | Body of one description block | Cannot contain html, line breaks or other text formatting |
| bullets | Bullet points of one description block (pipe-separated) | Cannot contain html, line breaks or other text formatting. "\|" is used as separator between bullet points. |
| description\_image\_url | URL to one image file corresponding to one description block. | Must be valid URL to an image file. Validated for 200 response. |
| description\_video\_url | URL to one externally hosted video corresponding to one description block. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |


## How to use the editing template

<iframe width="100%" height="400" src="https://www.youtube.com/embed/YbG6fDY4q0I?si=5xPfIZjaBS5IJU4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Brands

Each row represents one brand entity.


Brands have one global name. If your brand has different names in different languages, please create multiple brands.

To add a new brand, create a new row in the template and fill with appropriate data.

To change or remove information for a brand, change or remove the information in the appropriate cells.

Only the brands included in the template will be affected by the change upon upload.

### Images

Each row represents one image.

The URL must be a path to an image file. Each brand can have none, one or several images.

To add several images to the same brand, you create several rows with the same brand\_name\_slug.



To add a new image, simply add a new row, identify the brand entity you want to add the image to using the slug for the brand, the reference to the brand and the brand type. Finally, add the URL.
:::danger
To remove an image from a brand that currently has several images, remove the whole row for that image. To remove an image from a brand that has one image, remove only the image URL.
:::
The order of the images matter and will have the same order in the SQARP platform as they have in the sheet.
:::tip
To change the order of images, change the order of the rows, so that the image you want as primary appears first and so on.
:::
Only the brands included in the template will be affected by the change upon upload.

### Documents

Each row represents one document.

The URL must be a path to a document file. Each brand can have none, one or several documents.

To add several documents to the same brand, you create several rows with the same brand\_name\_slug.

To add a new document, simply add a new row, identify the brand entity you want to add the document to using the slug for the brand, the reference to the brand and the brand type. Finally, add the URL, document type and language.
:::danger
To remove a document from a brand that currently has several documents, remove the whole row for that document. To remove a document from an brand that has one document, remove only the document URL, document type and language.
:::
Only the brands included in the template will be affected by the change upon upload.

### Videos

Each row represents one video.

The URL must be a path to an externally hosted video. Each brand can have none, one or several videos.

To add several videos to the same brand, you create several rows with the same brand\_name\_slug.

To add a new video, simply add a new row, identify the brand entity you want to add the video to using the slug for the brand, the reference to the brand and the brand type. Finally, add the URL, video type and language.
:::danger
To remove a video from a brand that currently has several videos, remove the whole row for that video. To remove a video from a brand that has one video, remove only the video URL, video type and language.
:::
Only the brands included in the template will be affected by the change upon upload.

### Descriptions

Each row represents one description block.

Each description block can consist of a header, description, bullets, image and video.

Each description block must be filled in either description or bullets - but can of course have data in all columns.

Each brand can have none, one or several description blocks.

To add several description blocks to the same brand, you create several rows with the same brand slug.

Remember that the order of description blocks matter and will have the same order in the SQARP platform as in this sheet.

To add a new description block, simply add a new row, identify the brand entity you want to add the description block to using the slug for the brand, the brand type and the reference to the brand. Then add the contents to the description block.
:::danger
To remove a description block from a brand that currently has several description blocks, remove the whole row for that block.

To remove a description block from a brand that has one description block, remove all data except the brand reference, the brand type and the brand slug.
:::

:::tip
To change the order of description blocks, change the order of the rows, so that the block you want as primary appears first, and so on.
:::
Only the brands included in the template will be affected by the change upon upload.


