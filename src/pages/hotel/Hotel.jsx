import { useState } from 'react'
import { AiFillCloseCircle,} from 'react-icons/ai'
import { BiLeftArrowCircle, BiLocationPlus, BiRightArrowCircle } from 'react-icons/bi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './Hotel.css'

const Hotel = () => {
 const [slideNumber, setSlideNumber] = useState(0)
 const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      src: "https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) =>{
     let newSliderNumber;

     if(direction === "l"){
      newSliderNumber = slideNumber  === 0 ? 5 :slideNumber-1
     }else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1
     }

     setSlideNumber(newSliderNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
        <BiLeftArrowCircle className='arrow' onClick={()=>handleMove("l")}/>
        <siv className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
        </siv>
        <BiRightArrowCircle className='arrow' onClick={()=>handleMove("r")}/>
        <AiFillCloseCircle  className='close' onClick={()=>setOpen(false)} />
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <BiLocationPlus className='icon'/>
            <span>Elton St 125 New york</span>  
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className='hotelPreiceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=> handleOpen(i)} src={photo.src} alt=""  className='hotelImg'/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexis">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accomadation with airport
                conditioning and freee WIFI. The units has come with hardwood floors and feature a fully equipped Kichette with a microwave, a flat-screen TV, 
                and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Poplar points of interest near the apartment include 
                cloth hall. Main Market Square and Town Hall Tower. The nearest airport.
              </p>
            </div>
            <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 night)
                </h2>
                <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
      <Footer />
      </div>
    
    </div>
  )
}

export default Hotel