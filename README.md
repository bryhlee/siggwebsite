# siggwebsite

## Build & development

Run `node server.js` for preview.

## Adding photos to photos page

To add photos, first add a photo to the `/images/` folder, found in the root directory.

Then, add this code to photos.html:

```
  <a href="/images/bryson.jpg" data-lightbox="roadtrip">
    <img class="lb-img" src="/images/bryson.jpg">
  </a>      
```
where `href=""` points to the image you want to add,  `data-lightbox=""` refers to the group of the photo album name ("event4december2016"), and `src=""` refers to the same image as before. 
Also, note that you must have the `.lb-img` class, or else the entire thing will explode.


