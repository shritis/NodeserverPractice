/**
 * Created by anuvib on 7/7/2017.
 */
const https=require("https");
const url="https://maps.googleapis.com/maps/api/geocode/json?address=Florence";

https.get(url, res=>{
    res.setEncoding("utf8");
    let body="";
    res.on("data", data=>{
        body +=data;
    });
    res.on("end", () =>{
        body=JSON.parse(body);
        console.log(`City: ${body.results[0].formatted_address} -`,
        `Latitude: ${body.results[0].geometry.location.lat} -`,
        `Logitude: ${body.results[0].geometry.location.lng}`);
    });
});