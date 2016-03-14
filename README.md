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

The AngularJS controller called `footerController` (linked to the `.footer` tags) runs the script `bumpIt()` upon successfull load of any view. This is to ensure that `bumpIt()` is only run when the FOOTER loads, and not when the index.html loads (as you can only resize the body if the footer exists within the DOM! What was happening was that the DOM was doing `bumpIt()` before the footer even loaded). We can do this because AngularJS controllers will load any functions found within the controllers immediately when the particular element the controller is linked to finishes loading. Thus we attatch the controller to the footer. Problem solved.

The sticky footer issue was a bit different than most, because our footer has a variable height at times, so we need to constantly update `body`'s margin-bottom to fit that of the `.footer`'s height. If we had a static height footer, this wouldn't be an issue. In fact, we wouldn't need JavaScript at all.

Thank you to http://blog.mojotech.com/responsive-dynamic-height-sticky-footers/ for the guidance.

## How the routing works in html5mode

We needed to add

```
server.use(function(req, res) {
    res.sendfile(__dirname + '/index.html');
});
```
Basically, our website was having short-term-memory loss sever-side, and the web pages were not linking with the base index.html. This fixes the problem.
