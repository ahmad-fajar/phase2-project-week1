var axios = require('axios');


function search (req,res) {
  let queryq = req.query.q;
  let querye = req.query.entity_id;
  // klo butuh sort by rating
//  let querys = req.query.sort.rating
    // &sort=${querys}
  axios.get(`https://developers.zomato.com/api/v2.1/search?q=${queryq}&entity_id=${querye}`, {
    headers:  {
      user_key: 'b49a945954ad5a3863ff3040076007d6'
    }
  })
  .then(response => {
    // mentah
    // console.log(response);
    res.send(response.data.restaurants)

    // array
    // var restaurants = response.data.restaurants
    // restaurants.forEach(result => {
    //   res.send(result.restaurant)
    // })

    // image url
    // var restaurants = response.data.restaurants
    // restaurants.forEach(result => {
    //   res.send(result.restaurant.photos_url)
    // })
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = {
  search
}
