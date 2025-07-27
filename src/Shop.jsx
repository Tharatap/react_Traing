
import { useState } from "react";
import "./Shop.css";
export default function Shop(){
    const books = [
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ];
    
    const [query,SetQuery] = useState("");
    const [cart, setCart] = useState([]);
    const filterlist = books.filter(b=>b.author.toUpperCase().includes(query.toUpperCase())||b.title.toUpperCase().includes(query.toUpperCase()))
    const booklist = filterlist.map(b=>
        <div className="book-item" key={b.id}> {/* ต้องมี key มาแบ่งให้มันเป็นเอกลักษณ์ไม่ซ้ำกับตัวอื่น*/}
            <img className="book-thumbnail" src={b.image_url} alt={b.title} />
            <div>
                <p className="book-title">{b.title}/</p> <br />
                <p className="book-author">The author is {b.author}</p>
                <p className="book-price">Price : {b.price} $</p>
                <button className="add-cart-btn" onClick={() =>setCart([...cart, { title: b.title, price: b.price }])}
                style={{ position: "relative", zIndex: 20 }}>Add to cart</button>

            </div>
        </div>
    )
    let total = 0;
    cart.forEach(b=>total+=b.price);
    return(<>
        <header>
            <h1>E book</h1>
            <p>Your Gateway to Endless</p>
            <nav>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">about</a>
            </nav>
        </header>
        <div className="page-container">
            <div className="searchbox">Search : <input type="text" placeholder="Search Author or Title book" value={query} onChange={(e)=> SetQuery(e.target.value)}
        style={{padding:"8px",marginBottom:"20px",width:"100%",position:"relative",zIndex:10}}
        /></div>
        <div className="book-list">{booklist}</div>
        <div className="cart-title">Cart</div>
        <div className="cart-container">
           <ol> {
                cart.map((b,index)=><li className="cart-item" key = {index}>
                    <div className="book-title-card">{b.title}</div>
                    <div className="book-price-card" >{b.price}</div>
                    </li>)
            }
            </ol>
            <div className="cart-total">total :{total.toFixed(2)} $</div>
            <button className="clear-cart-btn" onClick={() => setCart([])} style={{ position: "relative", zIndex: 20 }}>clear cart</button>
        </div>
        </div>
        
    </>);
}


