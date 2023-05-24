import carrito from './img/carrito.png'
const CartWidget=()=>{
    return(
        <div>
            <img src={carrito} alt=" Ver carrito de compras" id="imgCarrito" />
            <div id="contador">0</div>
        </div>
    )
}
export default CartWidget