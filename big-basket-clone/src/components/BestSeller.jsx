
import {useReducer,useEffect,useState}from "react"
import BestSellerReducer from "./BestSellerReducer"
import { border, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import {deleteRestaurant, getData,postRestaurant} from "../api/api"
import { getData } from "./api"
import BestSellerCard from "./BestSellerCard"
// import AddRestaurant from "./AddRestaurant"
export default function BestSeller(){

    const initState={
        loading:false,
        error:false,
        data:[]
     }

    
      const[page,setPage]=useState(1)
      const[order,setOrder]=useState("asc")


const[state,dispatch]=useReducer(BestSellerReducer,initState)



const fetchAndUpdataData=(page,order)=>{
    dispatch({type:"FETCHLOADING"});
    getData({
        page:page,
        limit:4,
        sort:"price_starts_from",
        order:order
    })
    .then((data)=>{
        dispatch({type:"FETCHSUCCESS",payload:data?.data})
        // console.log(data.data)
    })
    .catch(()=>{
        dispatch({type:"FETCHERROR"})
    })
}
 
   useEffect(()=>{
    fetchAndUpdataData(page,order)
    // fetchAndUpdataData(`http://localhost:8080/restaurants?_page=${page}&_limit=4`)
    },[page,order])

    // const handleAddRestaurant=(restaurantData)=>{
    //     postRestaurant(restaurantData)
    //     .then(()=>{
    //         fetchAndUpdataData(page,order)
    //     })
    // }

    // const handleDeleteRestaurant=(id)=>{
    //     deleteRestaurant(id)
    //     .then(()=>{
    //         fetchAndUpdataData(page,order)
    //     })
    // }

    const{loading,error,data}=state

// return  loading?(<h1>...loading</h1>):error?(<h1>something went wrong</h1>):
// (<>
//      <AddRestaurant  handleAddRestaurant={handleAddRestaurant} />
//   {/* <button onClick={()=>setOrder("asc")}>sort by price ascending</button>
//   <button onClick={()=>setOrder("desc")}>sort by price descending</button>
//   */}

const isDisabled = page === 1
const isDisabledPlus=page===3
     return ( <>

<IconButton border={"2px solid red"} margin={"140px 0"} isDisabled={isDisabled} icon={<ChevronLeftIcon />} onClick={()=>setPage(page-1)} />

       { data.map((el)=>(
        <BestSellerCard  data={data} key={el.id} {...el}
           
         />
      ))} 

<IconButton border={"2px solid red"} isDisabled={isDisabledPlus} margin={"140px 0"} icon={<ChevronRightIcon />}   onClick={()=>setPage(page+1)} /> 
 

   
  <button disabled>{page}</button>
  


  </>
 )     
        
}