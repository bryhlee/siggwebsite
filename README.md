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
Basically what is happening here is the `margin-bottom` of `body` is being resized to match the height of the `footer` class. `bumpIt()` is the function that does the resizing. Every 250 ms, it updates the viewport, only if there has been a resizing. Yay!

The AngularJS controller called `indexController` (linked to the `html` tag) runs the script `bumpIt()` upon successfull load of any view. `bumpIt()` is run in app.js just in case, though I doubt we would need that.

The sticky footer issue was a bit different than most, because our footer has a variable height at times, so we need to constantly update `body`'s margin-bottom to fit that of the `.footer`'s height. If we had a static height footer, this wouldn't be an issue. In fact, we wouldn't need JavaScript at all.

Thank you to http://blog.mojotech.com/responsive-dynamic-height-sticky-footers/ for the guidance.

## #Wrapper and body background colors

Default background color was set to #FFFFFF. In order to make the footer and navbar not change color if scrolled past the viewport, we set the `#wrapper` id to have the background color #FFFFFF, and the `body` tag to have background color #25383C, which is the same color as both the navbar and footer. `#wrapper` wraps around everything in the view, located in index.html. 

Now, when we stretch the screen past the navbar by scrolling to high or streatch the screen past the footer by scrolling too low, we see the same color as if the navbar/footer is being stretched. So no more white stripes!
