import './NavBar.css'
import logo from './img/logo.png'
import CartWidget from './CartWidget.jsx'
const NavBar= ()=>{
    return(
        <header>
            <img src={logo} alt="imagen del logo" id="imgIncono" />
            <h1>Tienda Online PCGamer Dragon</h1>
            <section>
                <button>Ver Carrito</button>
                <button>Laptops</button>
                <button>Articulos Gamer</button>
                <button>Computadoras</button>
                <CartWidget/>
            </section>
            
            
         </header>
    )
}
export default NavBar