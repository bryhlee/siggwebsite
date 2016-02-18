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
Feel free to use the `<a></a>` tag wherever you want to achieve the lightbox effect. You don't need the `lb-img` class. That's only for the photos page.

## How the sticky footer works

First, we make our `html` and `body` tags have the following properties:

```
  html {
    width:100%;
    overflow-x:hidden;
    min-height:100%;
    position: relative;
  }

  body {
    margin-bottom: 260px;
    background-color: #25383C;
  }
```
The `overflow` is used to make sure we can't side scroll for any reason. `margin-bottom: 260px` is the default height for `lg` viewports. We don't need this, it's a backup in case the JS in the following code block doesn't work. 

NOTE: If the JS fails to load, then the code will breaks for `xs` and `sm` viewports. Then again, if the JS doesnt load, then neither will any of the views, since we use AngularJS for routing and view loads. So... it doesn't really matter?

```
  /* Variable Height Sticky Footer */
  var bumpIt = function() {  
    $('body').css('margin-bottom',    $('.footer').height());
  },
  didResize = false;

  bumpIt();


  $(window).resize(function() {
    didResize = true;
  });

  setInterval(function() {  
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
```
Basically what is happening here is the `margin-bottom` of `body` is being resized to match the height of the `footer` class. `bumpIt() 

The AngularJS controller called `indexController` (linked to the `html` tag) runs the script `bumpIt()` upon successfull load of any view.


