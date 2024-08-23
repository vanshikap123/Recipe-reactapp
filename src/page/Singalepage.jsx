import { Link , useLocation } from "react-router-dom";

const Singalepage= () =>{
    let location = useLocation()
    console.log(location.state.recipe)
    return(
        
         <div className="container ">
<div className="row  mt-5 bg-black p-4">
 <div className="col-md-4 bg-black p-2 ">
    <img className="w-100  " src={location.state.recipe.image}alt="" />
    </div>
 <div className="col-md-8 my-5 text-center text-info">
    <h1 className="text-center">{location.state.recipe.label}</h1>
    <h3  className="text-center">{location.state.recipe.mealType}</h3>
   
<div className="row mt-3 d-flex justify-content-center gap-4">
   <div className="col-md-3  fs-5  fw-5 bg-info text-black text-center p-2">{location.state.recipe.digest[5].label}</div>
   <div className="col-md-3  fs-5 fw-5 bg-info text-black text-center p-2">{location.state.recipe.digest[24].label}</div>
   <div className="col-md-3  fs-5 fw-5 bg-info text-black text-center p-2">{location.state.recipe.digest[8].label}</div>
</div>
<div className="row mt-3 d-flex justify-content-center gap-4">
   <div className="col-md-3  fs-5 fw-5 bg-info text-black text-center p-2">{location.state.recipe.digest[0].label}</div>
   <div className="col-md-3 fs-5 fw-5 bg-info text-black  text-center p-2">{location.state.recipe.digest[20].label}</div>
   <div className="col-md-3 fs-5 fw-5 bg-info text-black text-center p-2">{location.state.recipe.digest[3].label}</div>
</div>
<div className="text-center my-4">
<Link to={location.state.recipe.url} className="btn btn-outline-info fs-4 ">View Recipe</Link>
</div>
</div>

         </div>
         <div className="row bg-black   ">
  <div className='col-md-6 m-auto  d-flex justify-content-center '>
    <ul>
    <h1 className="text-info">ingredients</h1>
{location.state.recipe.ingredientLines.map((text)=>{
  return<li className="text-white fs-3">{text}</li>
})}
</ul>
  </div>
  

</div>
         </div>


       
    )}
    export default Singalepage;