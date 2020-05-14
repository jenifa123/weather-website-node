const request = require('request');
const forecast = (longitude,latitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=3098c85b0c8c3d77070bc66f91457bed&query='+latitude+','+ longitude +'&units=f'
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect',undefined);        
        }
        else if(body.error){
            callback('Unable to find the location. Try another search',undefined);
        }
        else{
            callback(undefined,
                "Weather is " + body.current.weather_descriptions[0] +" and temperature is " +
                body.current.temperature + " degrees. It Feels Like "+ body.current.feelslike +" degrees"
           )}
    })
}


module.exports = forecast;