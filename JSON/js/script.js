let weather;
let bgColour;
let x = 0;
let today = new Date();

let hoursTill, minsTill;
let hoursSince, minsSince;

function preload() { // challenge 1, naguilian
  weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=16.53&longitude=120.40&hourly=temperature_2m,cloudcover,windspeed_10m,winddirection_10m&daily=sunrise,sunset&current_weather=true&timezone=America%2FNew_York');
}

function setup() {
  createCanvas(500, 500);
  print(weather);

  bgColour = color(weather.hourly.cloudcover[0], weather.hourly.cloudcover[1], weather.hourly.cloudcover[2]);
  background(bgColour); // challenge 3, background based on cloud cover
  
  noStroke();
    
  circle(weather.latitude, weather.longitude, 20); // circle as lat/long.

  for(let i = 0; i < 5; i++){
    fill(random(100), weather.hourly.temperature_2m[i] + random(255), random(255));
    circle(random(width), random(height), weather.hourly.temperature_2m[i]);
  }

  fill(255); // challenge 2, print windspeed + direction
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Windspeed: " + weather.current_weather.windspeed + " - Direction: " + weather.current_weather.winddirection, width/2, height/2);
  // text("")

  print("sunset: " + weather.daily.sunset[0]);
  print("sunrise: " + weather.daily.sunrise[0]);
  print("time: " + today.getHours() + ":" + today.getMinutes());
}

function draw(){
  timeTillSunset();
}

function timeTillSunset(){
  minsTill = 60 - today.getMinutes() + 4;
  hoursTill = 24 - today.getHours() + 5;
  text("Time until Sunset: " + hoursTill + " hours and " + minsTill + " minutes", width/2, height/2 + 30);
}

function timeSinceSunrise(){
  minsSince = 60 - today.getMinutes() + 4;
  hoursSince = 24 - today.getHours() + 5;
  text("Time since Sunrise: " + hoursSince + " hours and " + minsSince + " minutes", width/2, height/2 + 30);
}

