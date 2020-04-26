import React from 'react'
import Room from '../component/Room'

export default function RoomList({rooms}) {
    if (rooms.length === 0) {
        return(
            <div className="empty-search">
                <h3>
                    Unfortunately no rooms matched your search parameter
                </h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
        <div className="roomslist-center">
            {rooms.map(item => {
                return(
                    <Room key={item.id} room={item} />
                )
            })}
            {/* Hello from Room List */}
        </div>
        </section>
    )
}