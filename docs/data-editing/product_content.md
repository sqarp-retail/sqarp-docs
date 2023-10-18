---
sidebar_position: 5
---

# Product content

### Module overview

In this module, we manage product level content. The template contains four sheets and is language dependent.

### Data & definitions

Product content is divided into four separate sheets:

- **Images**: Product images are managed here
- **Documents**: Product documents are managed here
- **Videos**: Product videos are managed here
- **Descriptions:** Descriptions for products are managed here

### IMAGES

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| image_url | URL to one image file. | Must be valid URL to an image file. Validated for 200 response. |

### DOCUMENTS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| document_url | URL to one document file. | Must be valid URL to a document file. Validated for 200 response. |
| document_type | Indication of the type of document | Must be valid document type. List of available document types and corresponding definitions can be found here. |
| document_language_code | Indication of the document language. | Lowercased ISO 639-1 Code |

### VIDEOS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| video_url | URL to one externally hosted video. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |
| video_type | Indication of the type of video | Must be valid video type. List of available video types and corresponding definitions can be found here. |
| video_language_code | Indication of the spoken video language. | Lowercased ISO 639-1 Code |

### DESCRIPTIONS

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| header | Header to one description block | Cannot contain html, line breaks or other text formatting. |
| description | Body of one description block | Cannot contain html, line breaks or other text formatting |
| bullets | Bullet points of one description block (pipe-separated) | Cannot contain html, line breaks or other text formatting. “|” is used as separator between bullet points. |
| description_image_url | URL to one image file corresponding to one description block. | Must be valid URL to an image file. Validated for 200 response. |
| description_video_url | URL to one externally hosted video corresponding to one description block. | Must be valid URL to a video. Preferably youtube or vimeo. Validated for 200 response. |

### SQARP GOLD STANDARD

- Have unique images for all individual products.
- Use a white background image that show the whole product as primary.

### HOW TO USE THE EDITING TEMPLATE

### IMAGES

Each row represents one image.

The URL must be a path to an image file. Each product can have none, one or several images.

To add several images to the same product, you create several rows with the same manufacturer article number.

The order of the images matter and will have the same order in the SQARP platform as they have in the sheet.

To add a new image, simply add a new row, identify the product you want to add the image to using the manufacturer article number. Finally, add the URL.

To remove an image from a product that currently has several images, remove the whole row for that image. To remove an image from a product that has one image, remove only the image URL.

To change the order of images, change the order of the rows, so that the image you want as primary appears first and so on.

Only the product included in the template will be affected by the change upon upload.

### DOCUMENTS

Each row represents one document.

The URL must be a path to a document file. Each product can have none, one or several documents.

To add several documents to the same product, you create several rows with the same manufacturer article number.

To add a new document, simply add a new row, identify the product you want to add the document to using the manufacturer article number. Finally, add the URL, document type and language.

To remove a document from a product that currently has several documents, remove the whole row for that document. To remove a document from a product that has one document, remove only the document URL, document type and language.

Only the products included in the template will be affected by the change upon upload.

### VIDEOS

Each row represents one video.

The URL must be a path to an externally hosted video. Each product can have none, one or several videos.

To add several videos to the same product, you create several rows with the same manufacturer article number.

To add a new video, simply add a new row, identify the product you want to add the video to using the manufacturer article number. Finally, add the URL, video type and language.

To remove a video from a product that currently has several videos, remove the whole row for that video. To remove a video from a product that has one video, remove only the video URL, video type and language.

Only the products included in the template will be affected by the change upon upload.

### DESCRIPTIONS

Each row represents one description block.

Each description block can consist of a header, description, bullets, image and video.

Each description block must be filled in either description or bullets - but can of course have data in all columns.

Each product can have none, one or several description blocks.

To add several description blocks to the same product, you create several rows with the same manufacturer article number.

Remember that the order of description blocks matter and will have the same order in the SQARP platform as in this sheet.

To add a new description block, simply add a new row, identify the product you want to add the description block to using the manufacturer article number. Then add the contents to the description block.

To remove a description block from a product that currently has several description blocks, remove the whole row for that block.

To remove a description block from a product that has one description block, remove all data except the manufacturer article number.

To change the order of description blocks, change the order of the rows, so that the block you want as primary appears first, and so on.

Only the products included in the template will be affected by the change upon upload.