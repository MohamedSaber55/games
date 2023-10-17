import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGameDetails } from '../store/slices/games-slice'
import Loading from './Loading'
import { MdDateRange, MdDeveloperMode, MdOutlineCategory, MdPublishedWithChanges } from "react-icons/md"
import { SiPlatformdotsh } from "react-icons/si"
import { IoBrowsers } from "react-icons/io5"
import { BsWindows } from "react-icons/bs"
import { HiOutlineStatusOnline } from "react-icons/hi"
import { BsArrowBarRight } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./../mainslider.scss"
import { IoMdHappy, IoMdSad } from "react-icons/io"
import { RiEmotionNormalLine } from "react-icons/ri"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Helmet, HelmetProvider } from 'react-helmet-async'

const GameDetails = () => {
    const [descOpen, setDescOpen] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.games)
    const game = data.game
    const bgs = data.game?.screenshots?.map(bg => { return { link: bg.image } })
    const bgIndex = Math.floor(Math.random() * 3)
    useEffect(() => {
        dispatch(getGameDetails(params.gameId))
    }, [dispatch, params.gameId])

    return (
        <HelmetProvider>
            <Helmet>
                <title>{game?.title}</title>
            </Helmet>
            {bgs?.length ? <section className='bg-cover bg-no-repeat h-screen bg-fixed' style={{ backgroundImage: `url(${bgs[bgIndex].link})` }}>
                <div className="pt-14 bg-main bg-opacity-70 h-full overflow-y-scroll px-3 sm:px-0">
                    <div className="container py-12 px-3" >
                        <div className="grid grid-cols-5 gap-8">
                            <div className="col-span-5 md:col-span-2 flex flex-col gap-5 sticky">
                                <div className="image">
                                    <img src={game.thumbnail} className='w-full rounded shadow-md shadow-slate-950' alt={game.title + " Image"} />
                                </div>
                                <div className=" flex gap-2">
                                    <a href={game.freetogame_profile_url} target='_blank' className='py-3 sm:py-4 md:py-5 text-center block w-1/5 bg-second border border-second hover:bg-transparent rounded' rel="noreferrer">Free</a>
                                    <a href={game.game_url} target='_blank' className='py-3 sm:py-4 md:py-5 text-center w-4/5 bg-transparent border border-second hover:bg-second rounded flex gap-1 items-center justify-center' rel="noreferrer">Play Now<BsArrowBarRight size={18} /></a>
                                </div>
                                <div className="rate-box">
                                    <div className="grid grid-cols-4 items-stretch bg-main rounded overflow-hidden">
                                        <div className="likes flex flex-col items-center gap-1 sm:gap-2 border-r border-r-gray-600 p-1 sm:py-2 hover:bg-main-light">
                                            <IoMdHappy size={26} className='text-green-500' />
                                            <p className='text-base '>10</p>
                                            <p className='text-base lg:text-lg font-mono '>LIKE</p>
                                        </div>
                                        <div className="likes flex flex-col items-center gap-1 sm:gap-2 border-r border-r-gray-600 p-1 sm:py-2 hover:bg-main-light">
                                            <RiEmotionNormalLine size={26} />
                                            <p className='text-base '>3</p>
                                            <p className='text-base lg:text-lg font-mono '>MEH</p>
                                        </div>
                                        <div className="likes flex flex-col items-center gap-1 sm:gap-2 border-r border-r-gray-600 p-1 sm:py-2 hover:bg-main-light">
                                            <IoMdSad size={26} className='text-red-500' />
                                            <p className='text-base '>1</p>
                                            <p className='text-base lg:text-lg font-mono '>DISLIKE</p>
                                        </div>
                                        <div className="likes flex flex-col items-center gap-1 sm:gap-2 p-1 sm:py-2 hover:bg-main-light">
                                            <AiOutlinePlusCircle size={26} className='text-blue-500'/>
                                            <p className='text-base '>14</p>
                                            <p className='text-base lg:text-lg font-mono '>ADD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5 md:col-span-3">
                                <h1 className='text-3xl md:text-4xl font-semibold mb-4'>{game.title}</h1>
                                <h2 className='text-xl md:text-2xl font-semibold'>About</h2>
                                <p onClick={() => setDescOpen(!descOpen)} className='text-base text-light-gray cursor-pointer'>{!descOpen ? game.short_description : game.description}</p>
                                {game.platform === "Windows" ? <>
                                    <h2 className='text-xl md:text-2xl mt-3 font-semibold'>Minimum System Requirements</h2>
                                    <ul className='text-light-gray mt-3 flex flex-col gap-3 list-disc px-5'>
                                        <li><p>{game.minimum_system_requirements?.graphics}</p></li>
                                        <li><p>{game.minimum_system_requirements?.memory}</p></li>
                                        <li><p>{game.minimum_system_requirements?.os}</p></li>
                                        <li><p>{game.minimum_system_requirements?.processor}</p></li>
                                        <li><p>{game.minimum_system_requirements?.storage === "?" ? "16 GB Storage" : game.minimum_system_requirements?.storage}</p></li>
                                    </ul>
                                </> : ""}
                                <h2 className='text-xl md:text-2xl mt-3 font-semibold'>Additional Information</h2>
                                <ul className='text-light-gray mt-3 grid grid-cols-2 xxs:grid-cols-3 gap-3 gap-y-5 md:gap-y-8'>
                                    <li className='flex flex-col gap-2'>
                                        <p className='flex items-center gap-1 text-light'><MdDeveloperMode size={18} /> Developer</p>
                                        <p className='text-sm px-0.5'>{game.developer}</p>
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <p className='flex items-center gap-1 text-light'><MdPublishedWithChanges size={18} />Publisher</p>
                                        <p className='text-sm px-0.5'>{game.publisher}</p>
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <p className='flex items-center gap-1 text-light'><MdDateRange size={18} />Release Date</p>
                                        <p className='text-sm px-0.5'>{game.release_date}</p>
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <p className='flex items-center gap-1 text-light'><MdOutlineCategory size={18} />Genre</p>
                                        <p className='text-sm px-0.5'>{game.genre}</p>
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <p className='flex items-center gap-1 text-light'><HiOutlineStatusOnline size={18} />Status</p>
                                        <p className='text-sm px-0.5'>{game.status}</p>
                                    </li>
                                    <li className='flex flex-col gap-2'>
                                        <p className='flex items-center gap-1 text-light'><SiPlatformdotsh size={18} />Platform</p>
                                        {game.platform === "Windows" ?
                                            <p className='flex items-center gap-1 text-sm px-0.5'> {game.platform}<BsWindows /></p>
                                            : <p className='flex items-center gap-1 text-sm px-0.5'> {game.platform}<IoBrowsers /></p>}
                                    </li>
                                </ul>
                                <div className="swipe mt-5 h-max">
                                    <Swiper
                                        modules={[Autoplay, Navigation]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation={true}
                                        loop={true}
                                        parallax={true}
                                        keyboard={{ enabled: true }}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false
                                        }}
                                        className="h-auto cursor-pointer select-none m-auto max-md:w-full md:rounded-lg mySlider"
                                    >
                                        {
                                            bgs?.map((swiperItem, i) => {
                                                return (
                                                    <SwiperSlide key={i} className="flex justify-center items-center w-full h-full md:rounded-lg min-h-[150px]">
                                                        <div className="row">
                                                            <img className=" md:rounded-lg" src={swiperItem.link} alt={`"slider`} />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> : <Loading />}
        </HelmetProvider>
    )
}

export default GameDetails