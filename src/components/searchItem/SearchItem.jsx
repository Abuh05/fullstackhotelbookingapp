import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='searchItemImg' />
        <div className="sideDesc">
            <h1 className="sideTitle">Tower Street Aoartments</h1>
            <span className='sideDistance'>500m from center</span>
            <span className="sideTaxiOp">Free airport taxi</span>
            <span className="sideSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className='sideFeatures'>
                Entire studio . 1 bathroom . 21m 1 full bed
            </span>
            <span className="sideCancelOp">
                Free cancellation
            </span>
            <span className='sideCancelSubtitle'>
                You can cancel later, so lock in this great price today
            </span>
        </div>
        <div className="sideDetails">
            <div className="sideRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sideDetailTexts">
                <span className="sidePrice">$230</span>
                <span className="sideTaxOp">Include taxs and fees</span>
                <button className='sideCheckBtn'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem