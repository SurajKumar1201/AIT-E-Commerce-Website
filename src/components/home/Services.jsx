import React from 'react'
import { useSelector } from 'react-redux';

const icon={
    border:"1px solid black",
    textAlign:"center",
    borderRadius:"50%",
    width:"30px",
    height:"30px",
    lineHeight:"20px",
    fontSize:"20px",
    backgroundColor:"white"
}


const Services = () => {
    const serviceData = useSelector((state) => state.data.serviceData);
    return (
        <>
        <div className="row d-flex mx-auto  mt-5 w-100">
            {
                serviceData.map((curEle) => (
                        <div className="col-sm-3" key={curEle.bg}>
                            <div className="card border-0 rounded-0" style={{backgroundColor:curEle.bg , height:"240px"}}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center" >
                                    <h5 className="card-title border-0" style={icon}>{curEle.icon}</h5>
                                    <div><h5 className="card-title mt-3">{curEle.title}</h5></div>                                    
                                    <p className="card-text mt-3">{curEle.subtitle}</p>                                  
                                </div>
                            </div>
                        </div>
                    

                ))
            }
            </div>

        </>
    )
}

export default Services
