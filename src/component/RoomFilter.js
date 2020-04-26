import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../component/Title'

//get all uniq value
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomFilter({rooms}) {
    // utk akses usecontext RoomContext
    const context = useContext(RoomContext);
    //console.log(context);
    const { handleChange, type,capacity, price,minPrice,
    maxPrice,minSize,maxSize,breakfast,pets} = context;

    //get Uniq type for type 
    let types = getUnique(rooms,'type');
    // add all
    types = ['all',...types];
    // map to jsx
    types = types.map((item,index)=>{
       return <option value={item} key={index}>{item}</option> 
    })

    //get Uniq type for guest 
    let people = getUnique(rooms,'capacity');
    // map to jsx
    people = people.map((item,index)=>{
       return <option value={item} key={index}>{item}</option> 
    })

    return (
        <div className="filter-container">
            <Title title="search-rooms" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-goup">
                    <label htmlFor="type">room type</label>
                    <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div> 
                {/*end select type*/}
                {/*guest*/}
                <div className="form-goup">
                    <label htmlFor="capacity">Guest</label>
                    <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {people}
                    </select>
                </div> 
                {/*end guest*/}
                
                {/*room price*/}
                <div className="form-goup">
                <label htmlFor="price">room price {price}</label>
                <input type="range" name="price" 
                min={minPrice} max={maxPrice} id="price"
                value={price} className="form-control"
                onChange={handleChange}
                />
                </div>
                {/*end room price*/}
                {/*room size*/}
                <div className="form-goup">
                    <label htmlFor="size">room size </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize"
                        id="size" value={minSize} 
                        onChange={handleChange}
                        className="size-input"/>
                        <input type="number" name="maxSize"
                        id="size" value={maxSize} 
                        onChange={handleChange}
                        className="size-input"/>
                    </div>
                </div>
                {/*end room size*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end extras*/}

            </form>
            {/* hello from Room Filter */}
        </div>
    )
}
