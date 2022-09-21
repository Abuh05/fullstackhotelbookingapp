import "./Header.css";
import { FaBed } from "react-icons/fa";
import { MdOutlineFlight, MdAttractions } from "react-icons/md";
import { BiTaxi } from "react-icons/bi";
import { AiOutlineCar, AiFillCalendar } from "react-icons/ai";
import { BsPersonCheckFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format } from 'date-fns'
import { useState } from "react";

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev, 
            [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
        }
    })
  }

  const handleSearch = () => {
    
  }
  return (
    <div>
      <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <MdOutlineFlight />
              <span>Flight</span>
            </div>
            <div className="headerListItem">
              <AiOutlineCar />
              <span>Car Rental</span>
            </div>
            <div className="headerListItem">
              <MdAttractions />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <BiTaxi />
              <span>Airport Taxis</span>
            </div>
          </div>

          {type !== "list" && <>
          <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
          <p className="headerDesc">
            Get reward for your travels - unlock instant savings of 10% or more
            with a free Rapidbooking account
          </p>
          <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <AiFillCalendar className="headerIcon" />
              <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />}
            </div>
            <div className="headerSearchItem">
              <BsPersonCheckFill className="headerIcon" />
              <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
               {`${options.adult} adult . ${options.children} children . ${options.room} room`}
              </span>
             { openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCouter">
                    <button 
                     disabled={options.adult <= 1}
                    className="optionCouterBtn" onClick={() => handleOption("adult", "dec")}>-</button>
                    <span className="optionCouterNumber">{options.adult}</span>
                    <button className="optionCouterBtn" onClick={() => handleOption("adult", "inc")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCouter">
                    <button
                     disabled={options.children <= 1}
                    className="optionCouterBtn" onClick={() => handleOption("children", "dec")}>-</button>
                    <span className="optionCouterNumber">{options.children}</span>
                    <button className="optionCouterBtn" onClick={() => handleOption("children", "inc")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCouter">
                    <button 
                     disabled={options.room <= 1}
                    className="optionCouterBtn" onClick={() => handleOption("room", "dec")}>-</button>
                    <span className="optionCouterNumber">{options.room}</span>
                    <button className="optionCouterBtn" onClick={() => handleOption("room", "inc")}>+</button>
                    </div>
                </div>
              </div>}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div> </>}
        </div>
      </div>
    </div>
  );
};

export default Header;
