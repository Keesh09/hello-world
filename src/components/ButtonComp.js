

function ButtonComp({handleGreeting, handleMEnter}){
    return (
        <div>
           <button onClick={handleGreeting}>Greeting</button>
           <button onMouseOut={()=> handleMEnter("Keesh")}>Mouse Enter</button>
        </div>
    )
}
export default ButtonComp