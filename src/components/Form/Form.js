import React from 'react'
import "./Form.css";
import { message } from 'antd';

const Form = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        pickUp: "",
        dropOff: "",
        date: "",
        time: "",
        textarea: ""
    })

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'Your taxi has been booked successfully !',
        });
    };

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Fill all the required details.',
        });
      };

    function handleChange(event){
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        if(formData.name==="" || formData.date==="" || formData.dropOff===""|| formData.pickUp===""||formData.time===""){
            error()
        }
        else {
            success();
        }
    }

  return (
    <>
    {contextHolder}
    <div className='book-form'>
        <div className='common-width'>
            <h1>Book Taxi:</h1>
            <form action="" id='booking-form' onSubmit={handleSubmit}>
            <input 
                    type="text"
                    placeholder='Name' 
                    onChange={handleChange}
                    name='name'
                    className='form-input'
                    value={formData.name}
                />
                <input 
                    type="text"
                    placeholder='Pick up location' 
                    onChange={handleChange}
                    name='pickUp'
                    className='form-input'
                    value={formData.pickUp}
                />
                <input 
                    type="text"
                    placeholder='Drop Off location' 
                    onChange={handleChange}
                    name='dropOff'
                    className='form-input'
                    value={formData.dropOff}
                />
                <input 
                    type="date"
                    placeholder='Date' 
                    onChange={handleChange}
                    name='date'
                    className='form-input'
                    value={formData.date}
                />
                <input 
                    type="time"
                    placeholder='Time' 
                    onChange={handleChange}
                    name='time'
                    className='form-input'
                    value={formData.time}
                />
                <textarea 
                    name="textarea" 
                    id="textarea" 
                    cols="30" 
                    rows="10" 
                    onChange={handleChange}
                    value={formData.textarea}
                >
                </textarea>
                <button id='submit-btn' type='submit'>Book Now</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Form