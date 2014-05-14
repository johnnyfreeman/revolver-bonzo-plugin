# [revolver](https://github.com/johnnyfreeman/revolver)-bonzo-plugin


A Revolver plugin for [Bonzo](https://github.com/ded/bonzo)

## Usage

```javascript
var mySliderContainer = document.querySelector('#my-slider');

// instantiate
bonzo(mySliderContainer).revolver({slidesSelector: '.slide'});

// get instance
var revolver = bonzo(mySliderContainer).data('revolver');
```
