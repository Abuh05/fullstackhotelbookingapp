import  './PropertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className='pListImg'/>
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""  className='pListImg'/>
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>211 Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""  className='pListImg'/>
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>253 Resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""  className='pListImg'/>
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 Villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""  className='pListImg'/>
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList