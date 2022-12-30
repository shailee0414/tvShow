
import { apis } from "../apis";

export const fetchShows =()=>async (dispatch)=>{
    const data= await apis().get('')
    dispatch({type:"FETCH_SHOWS",payload:data?.data})
}
// export const fetchDetails =({payload})=>(dispatch)=>{
//     const data= await apis().get('post')
//     dispatch({type:'FETCH_DETAILS',payload:payload})
// }