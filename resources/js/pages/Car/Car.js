import React, {useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import {Link, useHistory} from 'react-router-dom'
import {Context} from '../../store/Store'
import Card from '../../components/Home/Card'
import Modal from '../../components/Modal/Modal'
import './index.css'

export default function Car(){

    const history = useHistory();
    //This syntax is for pass the Test
    const context = useContext(Context)
    const state = context[0];
    const dispatch = context[1];

    const handleClick =(e)=>{
        dispatch({type: 'REMOVE_PRODUCT', payload: e})
    }

    //This syntax is for pass the Test
    const Estado = useState({modalIsOpen: false})
    const localState = Estado[0];
    const setState = Estado[1];

    const handlerModal = ()=>{
        let a = (localState.modalIsOpen) ? false : true
        setState({modalIsOpen: a})
    }

    const checkTarget = (e)=>{
        if(state.target){
            return(
                history.push('/buy')
            )
        }else{
            handlerModal()
        }
    }

    let subTotalPrice=0
    let iva = 15

    return(
        <div className="container-fluid">
            <div className="row">
                {(state.products.length == 0) ? (<Link to="/"
                    className="text-decoration-none text-light badge badge-primary py-2 px-4 list-inline-item">
                        No Products Here
                </Link>) : (
                    state.products.map((el)=>{
                        subTotalPrice += parseInt(el.price)
                        return(
                            <div key={el.id} className="col p-1 position-relative card-product-container">
                                <div onClick={()=>handleClick(el)} 
                                    className="remove position-absolute top-0 end-0 badge bg-danger text-wrap p-3 text-light"> 
                                     Remove
                                 </div>
                                <Card url={el.url} 
                                    height="200px"
                                    backgroundSize ='cover'
                                    backgroundPosition = "bottom center"
                                />
                                <p>{el.name}</p>
                                <p>{el.price}</p>
                            </div>)}))}
            </div>
            {(state.products.length!=0) ? (
                <div className="row pt-5">
                    <div className="col">
                        <button onClick={checkTarget} className="btn p-3 btn-sm btn-success w-100">
                            Comprar
                        </button>
                    </div>
                    <div className="col">
                            <p>Subtotal: $ {subTotalPrice}</p>
                            <p>Iva: $  {iva}</p>
                            <hr/>
                            Total: $ {subTotalPrice + iva} 
                    </div>
                </div>
            ): ''}


            {(localState.modalIsOpen && <Modal/>) ?
                ReactDOM.createPortal(<Modal handlerModal={handlerModal}/>, document.getElementById('modal'))
            : ''}

        </div>)
}