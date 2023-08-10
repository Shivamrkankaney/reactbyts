import axios from "axios";
import { useState , useEffect } from "react";
export function NasaApi(){
    const [ mars , setMars]= useState([]);
    useEffect(()=>{
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(response=>{
            setMars(response.data.photos)
            console.log(response.data.photos);
        })
    },[])
    return(
        <div className="container-fluid">
            <main className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                {
                    mars.map((item:any)=>
                       <div key={item} className="card m-2 p-2 " style={{width:'200px'}}>
                        <img src={item.img_src} className="card-img-top" style={{height:'150px'}} />
                        <div className="card-header">{item.id}</div>
                        <div className="card-body">
                            <dl>
                                <dt>Camera Name</dt>
                                <dd>{item.camera.full_name}</dd>
                                <dt>Rover</dt>
                                <dd>{item.rover.name}</dd>
                            </dl>
                        </div>
                       </div> )
                }

            </main>
        </div>
    )
}
