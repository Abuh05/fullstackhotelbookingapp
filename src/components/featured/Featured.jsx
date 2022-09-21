import './Featured.css'


const Featured = () => {
  return (
    <div className='featured'>
       <div className="featuredItem">
        <img src="https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
       </div>
       <div className="featuredItem">
        <img src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Slovakia</h1>
          <h2>456 properties</h2>
        </div>
       </div>
       <div className="featuredItem">
        <img src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>789 properties</h2>
        </div>
       </div>
    </div>
  )
}

export default Featured