
console.log("Hello");


function loadData() {

  var $body          = $('body');
  var $wikiElem      = $('#wikipedia-links');
  var $nytHeaderElem = $('#nytimes-header');
  var $nytElem       = $('#nytimes-articles');
  var $greeting      = $('#greeting');
  var $street        = $('#street');
  var $city          = $('#city');

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  // load streetview
  var street = $street.val();
  var city = $city.val();
  var address = street + ', ' + city;

  // load nyTimes

  var NyApiKey = '50dfeb2dd7284cfbab4a3667bd311b30';
  var NyURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest' + apikey

  $.getJSON( NyURL, function( data ) {
  var items = [];
  console.log(data)
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

  $greeting.text('So you want to live at ' + address + '?');

  //setup streetviewSrc
  var streetviewSrc = 'http://maps.googleapis.com/maps/api/streetview?size=800x480&location=' + address + '';
  // console.log(src);

  //append <img> to the page
  $body.append('<img class="bgimg" src= "' + streetviewSrc + '">');

  return false
};

$('#form-container').submit(loadData);
