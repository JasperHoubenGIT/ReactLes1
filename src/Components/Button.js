function Button(){
    return (
       <>
           <nav>
               <button
               disabled={false}>To the collection!</button>
               <button
               disabled={false}>Shop all bags</button>
               <button
               disabled={true}>Pre-orders</button>
           </nav>
       </>
    )
}
export default Button