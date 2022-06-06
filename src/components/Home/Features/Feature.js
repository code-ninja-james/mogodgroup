import React from 'react'
import Button from '@mui/material/Button';
function Feature({data}) {
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="feature-box">
                <div className="image">
                    <img src={data.icon} style={{height:'80px'}} alt="" />
                </div>
                <div className="description" >
                    <h4 style={{color:"#12ace9"}}>{data.title}</h4>
                    <p>{data.description}</p>
                    <Button href="#text-buttons" style={{color:"white"}}>More info...</Button>
                </div>
            </div>
        </div>
    )
}

export default Feature
