import './From.css'
import { useState } from 'react';

export const Form = () => {
    const [title, setTitle]= useState('');
    const [des, SetDes]= useState('');
    const [acti, setActi]= useState('');
    const handleSubmit= (e)=> {
        e.preventDefault();
        const newObj= {
            title: title,
            des: des,
            acti: acti
        }
        console.log(newObj);
    }
    
    return (
        <>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)} />
                    <textarea name="" id="" cols="30" onChange={(e)=> SetDes(e.target.value)}></textarea>
                    <input type="radio" name="activate" id="" onChange={(e)=> setActi(!acti)} />Active
                    <input type="radio" name="activate" id="" onChange={(e)=> setActi(!acti)} />DeActive
                    <button >Submit</button>
                </form>
            </div>
        </>
    )
}