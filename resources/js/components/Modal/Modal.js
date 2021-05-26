import React, {useContext, useState} from 'react'
import './index.css'
import {Context} from '../../store/Store'

export default function Modal({handlerModal}){

    const [localState, setState] = useState({})
    const [state, dispatch] = useContext(Context)

    const handlerChange = (e=>{
        setState({
            ...localState,
            [e.target.name]: e.target.value
        })
    })

    const handleSubmit = ()=>{
        if(localState['name'] && localState['cvv'] && localState['exp']){
            dispatch({type:'SET_TARGET', payload: localState})
            handlerModal()
        }else{
            alert('Te falta llenar un campo')
        }
    }

    return(
        <div className="position-absolute top-0 modal-cm d-flex justify-content-center align-items-center " style={{background: 'rgba(0, 0, 0, .5)',
                                                            width: '100vw', height: '100vh'
        }}>
            <div className="w-25 card py-5 px-5 text-light">
                        <h5 className="text-center">Parace que aun no has agregado una tarjeta</h5>
                        <br></br>
                        <label>
                            Name
                        </label>
                        <input name="name" type="text" onChange={handlerChange} required/>
                        <br/>
                        <label>
                            CVV
                        </label>
                        <input name="cvv" type="text" onChange={handlerChange} required/>
                        <br/>
                        <label>
                            Date-exp
                        </label>
                        <input name="exp" type="text" onChange={handlerChange} required/>
                        <button  onClick={handleSubmit} className="mt-3 btn btn-primary btn-sm px-3 py-2">
                            Acceptar
                        </button>
            </div>
        </div>
    )
}