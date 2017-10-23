const clientId = 'zmZF2QQzZLHF5C6F9rvKzw';
const secret = 'dTWAUX4Q9UQyHP8aWdS0xfU4DB5UHd7eyxI4bvwooCJMHe3pbGPWrIeCw8uqbaU2';
let accessToken ='';

export let Yelp  = {
  getAccessToken(){
    if(accessToken){
      return new Promise(resolve =>
      resolve(accessToken));
    }
    return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
    {method: 'POST'}).then(response =>{
      return reponse.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });

  search(term,location,sortBy){
    return Yelp.getAccessToken().then(()
  =>{
    return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${location}&location=${location}&sort_by=${sortBy}`,{
    headers:{Autorization:  `Bearer ${accessToken}`}
  });
}).then(response =>{
  return response.json();
}).then(jsonResponse => {
   if (jsonResponse.business){
     return jsonResponse.business.map(business
       => {
         return{
           id:business.id,
           imageSrc:business.image_url,
           name:business.name,
           address:business.address,
           city:business.location.city,
           state:business.location.state,
           zipCode:business.location.zip_code,
           category:business.category[0].title,
           rating:business.rating,
           reviewCount:business.review_count
           }
        }
      )
     );
   }
}
}
