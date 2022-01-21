const request = require('request')


const address = (location,callback)=>{
    const addressuri = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoibW9oYW1lZHkyNTciLCJhIjoiY2t5a2xiNjk0MGQ3dzJ2cGU1OXJvN3U2dyJ9.p7DxOPsmrdW6B2OQDAR02w&limit=1'
    console.log(addressuri)
request({ uri: addressuri , json : true},
    (error,response) => {
        if(error){
            console.log('Can\'t reach address Api')
            return
        }
    const data = response.body.features
    if(data.length === 0){
        console.log('address not found!')
        return
    }

    if(response.body.error){
        console.log('error reading data from API')
        return
    }

    callback(data[0].center[1]+','+data[0].center[0])
})
}

const getweather =(geodata) =>{
    const weatheruri = 'http://api.weatherstack.com/current?access_key=a649e8216ea983b67d2521153ee2fb31&query='+geodata
     
    request({ url: weatheruri , json : true},
        (error,response) => {
            if(error){
                console.log('Can\'t reach weather Api')
                return
            }

            if(response.body.error){
                console.log('error reading data from API')
                return
            }
     const data = response.body.current
     console.log(response.body.location.name)+'\n'
     console.log(data.weather_descriptions[0] + '.The Current wearther is ' + data.temperature + ' and the feels like is ' + data.feelslike)
 })
}

address('128 summer dr,atlanta,ga',(data) => getweather(data))

