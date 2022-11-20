$('p').text('123')
$('h1').css('color','brown')
console.log($('h1').text());
$('p').text('get the location');
$('p').click(function (e) { 
    getLocation();
});

const url = 'https://api.wheretheiss.at/v1/satellites/25544';
let myRequest = new XMLHttpRequest();
myRequest.open('GET',url)
myRequest.onload =
 function(){
    let data = myRequest.responseText;
    let ISS = JSON.parse(data);
    console.log(ISS.latitude, ISS.longitude);  
    
 }
async function getLocation(){
    $('span').fadeOut();
    const fetch1 = await fetch(url);
    const response = await fetch1.json();
    // $(".lat").text(response.latitude);
    // $(".long").text(response.longitude);
    const {latitude, longitude} = response;
    $('.lat').text(latitude);
    $('.long').text(longitude);
    $('span').fadeIn();
    myRequest.open('GET',url)
    myRequest.send();
}
