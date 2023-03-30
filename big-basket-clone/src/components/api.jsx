import axios from "axios"
export const getData=(params={})=>{
    return axios.get(`http://localhost:8080/products`,{
        params:{
            _page:params.page,
            _limit:params.limit,
            _sort:params.sort,
            _order:params.order
        }
    })
 }

//   export const postRestaurant=(restaurantData)=>{
//     return axios.post(`http://localhost:8080/restaurants`,{
//         name:restaurantData.name,
//         type:restaurantData.type,
//         rating:restaurantData.rating,
//         number_of_votes:restaurantData.number_of_votes,
//         price_starts_from:restaurantData.price_starts_from,
//         image:restaurantData.image
//     })
//  }
//  export const deleteRestaurant=(id)=>{
//     return axios(
//         {
//             method:"delete",
//             url:`http://localhost:8080/restaurants/${id}`,
//         }
//     )
//  }

 