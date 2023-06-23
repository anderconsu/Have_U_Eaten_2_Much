import apikey from "./api.mjs"


async function iplocation() {
    let response = await fetch(`http://api.ipapi.com/api/check?access_key=${apikey}`);
    let data = await response.json();
    console.log(data)
}
iplocation();