// Scripts

//https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
  location: 'Spokane',
  unit: 'f',
  
  success: function(weather){
    
    // Show Weather (Check-check)
    console.log(weather);
    console.log(weather.city);
    console.log(weather.region);
 
    console.log(weather.temp);
    console.log(weather.humidity);
    console.log(weather.currently);
    
    //Display Weather
    $('.image img').attr( 'src', weather.image );
    
    $('.city').text( weather.city )
    $('.state').text( weather.region )
    $('.temp').text( weather.temp)
    $('.humidity').text( weather.humidity)
    $('.current').text( weather.currently )
    
 
  },
  
  error: function(error){
    console.log('Go look outside');
  }
  
});