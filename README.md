# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Is it cold out?

Going to create a simple app where you are asked to set your preferences about the weather and every day it will tell you if the weather is cold or not based on your preference.


°



3/11/22
    set pref. 
    then if location is not set it will ask to set location after submit. 
    through the mounting of show weather.
    that data is set in the state as data.

    now need to use localStorage to compare the values for their locations.
    make sure if your local storage is set but location isnt it still asks.
    find a way to not track location?? set location?


3/13/22
    I think that showWeather shoudl become where i collect the city
    create another component that has all info and uses it
    pass state of showWeather to another component(state holds the city name and the weather info)
    new component will be a presentaional comp


3/14/22
    Created a presentaional comp
    need to now just use the data and compare to given info and make the weather report