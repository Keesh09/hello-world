import './Calculator.css'

function Calculator ({count, decrement, increment, reset}){
    return(
        <div>
            <button onClick={()=> decrement()} className='btn'>-</button>
            <b> {count} </b>
            <button onClick={()=> increment()} className='btn'>+</button>
            <button onClick={()=> reset()} className='btn'>Reset</button>
        </div>
    )
}
export default Calculator