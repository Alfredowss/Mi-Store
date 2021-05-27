import React, {useContext} from 'react';
import Card from '../../components/Home/Card'
import './index.css';
import {Context} from '../../store/Store'
import {data} from '../../store/FakeData'



export default function Home(){

    const cmStyles= {
        fontWeight: 'bolder'
    }

    const image1= "https://i.pinimg.com/originals/84/ad/a4/84ada4bbb509bbc1e1bdaea876510e01.png";
    
    const context = useContext(Context);
    const state = context[0];
    const dispatch = context[1]

    const handleClick = (e)=>{
        console.log(context)
        dispatch({type: "ADD_PRODUCT", payload: e})
    }

    return(
        <div className="container-fluid">
            <div className="row">

                 <div className="col p-0">
                    <ul className="list-inline text-center mx-auto py-4">
                        <li style={{...cmStyles}} className="fs-5 mx-3 list-inline-item">Nuevos</li>
                        <li style={{...cmStyles}} className="fs-5 mx-3 list-inline-item">Ofertas</li>
                        <li style={{...cmStyles}} className="fs-5 mx-3 list-inline-item">Hombres</li>
                        <li style={{...cmStyles}} className="fs-5 mx-3 list-inline-item">Mujeres</li>
                        <li style={{...cmStyles}} className="fs-5 mx-3 list-inline-item">About us</li>    
                    </ul>                    
                </div>
            </div>

            <div className="row pt-5">
                <div className="col p-0">
                    <Card url={image1} 
                        height="200px"
                        backgroundSize ='cover'
                        backgroundPosition = "center center"
                    />
                </div>
            </div>

             <div className="row pt-4">
                    <div className="col p-0 pr-3">
                        <Card url={image1} 
                            height="200px"
                            backgroundSize ='cover'
                            backgroundPosition = "bottom center"
                        />
                    </div>

                    <div className="col p-0 pl-3">
                        <Card url={image1} 
                            height="200px"
                            backgroundSize ='cover'
                            backgroundPosition = "center center"
                        />
                    </div>
            </div>  

            <h4 className="mt-4"> New </h4>

            <div className="row pt-3">
                {data.map((el)=>{
                    
                    let padding = (el.id == 1 || el.id == 4) ? 'p-0' : '';
               
                    return (
                        <div key={el.id}
                            className={"card-product-container position-relative col " + padding}>
                            <div onClick={()=>handleClick(el)} 
                                    className="add position-absolute top-0 end-0 badge bg-primary text-wrap p-3 text-light"> 
                                Add
                            </div>
                            <Card url={el.url} 
                                height="200px"
                                backgroundSize ='cover'
                                backgroundPosition = "center center"
                            />  
                            <p>Name: {el.name}</p> 
                            <p>Price: {el.price}</p> 
                        </div>
                    )
                })}
            </div>

        </div>
    )

}