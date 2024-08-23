import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  let inputRef = useRef();
      const [item, setitem] = useState([]);
      const [search,setsearchitem]=useState("paneer");
    async function fethcData(){
        let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=249b8c77&app_key=accc417489d9e0dfa317fbc0cb7be4c8`)
        let data = await res.json()
        // console.log(data.hits)
        setitem(data.hits)

    }
    // fethcData()
    useEffect(()=>{
        fethcData()
    },[search])
    console.log(item)
    const handlsubmit =(e)=>{
     e.preventDefault()
let searchValue = inputRef.current.value
console.log(searchValue)
if(searchValue){
  setsearchitem(searchValue)
}
    }
  return (
    <div className='container-fluid'>
      <div className='box2 p-4'> 
      <div> 
        <h1 className='text-center heading'>Search Any Recipe</h1>
        <form onSubmit={handlsubmit} className="d-flex col-md-6 m-auto my-5  bg-black p-3 rounded-3" role="search">
  <input ref={inputRef} className="form-control me-2 border border-3  border-info" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-info fs-4" type="submit">Search</button>
</form></div></div>
      <div>
    

</div>
  <div className='row  d-flex gap-2 justify-content-center mt-5'>
{item.map((ele)=>{
return(
   <div className="card border border-info p-3  bg-black text-center" style={{width: '20rem'}}>
  <img src={ele.recipe.image} className="card-img-top bg-white" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate text-info fs-3 my-3">{ele.recipe.label}</h5>
    <Link state={ele} to="/recipe" className="btn btn-outline-info fs-5">View Recipe</Link>
  </div>
</div>
)
})}
  </div>
  </div>
  )
}
export default Home