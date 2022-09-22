import { BiLocationPlus } from 'react-icons/bi'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './Hotel.css'

const Hotel = () => {

  const photos = [
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
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
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt=""  className='hotelImg'/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel