import React from 'react'
import { Link } from 'react-router-dom'
import { IoBrowsers } from "react-icons/io5"
import { BsWindows } from "react-icons/bs"
const Game = ({ game }) => {
    return (
        <Link to={`/game/${game.id}`} className="rounded overflow-hidden bg-main-light hover:bg-main-lighter hover:animate-pulse hover:mix-blend-plus-lighter duration-300 group">
            <div className="image-box">
                <img src={game.thumbnail} className="w-full" alt={game.title + " Image"} />
            </div>
            <div className="body p-5 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h5 className="text-base font-semibold">{game.title.length > 10 ? game.title.slice(0, 10) + "..." : game.title}</h5>
                    <button className="bg-main-lighter p-3 rounded-md duration-300 group-hover:bg-main-light">Free</button>
                </div>
                <div className="flex justify-between text-light-gray">
                    <p className="">{game.publisher.length > 10 ? game.publisher.slice(0, 10) + "..." : game.title}</p>
                    <div className="flex gap-3 items-center text-sm">
                        <p className='bg-main-lighter duration-300 group-hover:bg-main-light p-1 rounded'>{game.genre}</p>
                        <p>{game.platform === "Web Browser" ? <IoBrowsers /> : <BsWindows />}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Game