import  React,{useState} from "react";
//import img3 from "../images/img3.png";
// import img3 from "../images/img3.png"



const Menu=()=>{
    let[details,setDetails]=useState(
        [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './src/images/img3.png',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './src/images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './src/images/img3.png',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './src/images/item-2.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './src/images/img3.png',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './src/images/item-2.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './src/images/img3.png',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './src/images/item-2.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './src/images/img3.png',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]
    )

console.log(details)


return (
    <div className="menu">
      <div className="navbar">
        <h1>Our Menu</h1>
        <div className="nav-links">
          <a href="">All</a>
          <a href="">Breakfast</a>
          <a href="">Lunch</a>
          <a href="">Shakes</a>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {details.map((detail, index) => (
          <div key={index} style={{ flex: "0 0 33%", padding: "10px" }}>
            {/* Rest of your item content */}

            <img src={detail.img} alt={detail.title} style={{ maxWidth: "100%" }} />

            <h1>{detail.title}</h1>
            <p>{detail.price}</p>
            <p>{detail.category}</p>
            <p>{detail.desc}</p>
          </div>
          
) ) }
     
    </div>
    </div>
  )
        }
export default Menu;