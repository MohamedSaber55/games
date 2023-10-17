import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/slices/games-slice'
import Game from '../Components/Game/Game'
import Loading from './Loading'
import Select from 'react-select'
import { MdExpandMore, MdOutlineUnfoldMore } from "react-icons/md"
import { Helmet, HelmetProvider } from 'react-helmet-async'
const sortByData = [
    { value: "alphabetical", label: "Alphabetical" },
    { value: "popularity", label: "Popularity" },
    { value: "release-date", label: "Release Date" },
    { value: "relevance", label: "relevance" },
];
const platformData = [
    { value: "pc", label: "PC" },
    { value: "browser", label: "Browser" },
];
const categoryData = [
    { value: "racing", label: "Racing" },
    { value: "sports", label: "Sports" },
    { value: "social", label: "Social" },
    { value: "shooter", label: "Shooter" },
    { value: "open-world", label: "Open World" },
    { value: "zombie", label: "Zombie" },
    { value: "fantasy", label: "Fantasy" },
    { value: "action-rpg", label: "Action RPG" },
    { value: "action", label: "Action" },
    { value: "flight", label: "flight" },
    { value: "battle-royale", label: "Battle Royal" },
];

const Games = () => {
    const [category, setCategory] = useState(null)
    const [sort, setSort] = useState(null)
    const [platform, setPlatform] = useState("all")
    const [more, setMore] = useState(20)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.games)

    const onChange = (selectedItems, action) => {
        if (action?.name === "platform") {
            setPlatform(selectedItems?.value)
        }
        if (action?.name === "category") {
            setCategory(selectedItems?.value)
        }
        if (action?.name === "sortBy") {
            setSort(selectedItems?.value)
        }
    };

    useEffect(() => {
        if (sort && category) {
            dispatch(fetchData({ platform, category, sort }))
        }
        if (!category && !sort) {
            dispatch(fetchData({ platform }))
        }
        if (category) {
            dispatch(fetchData({ platform, category }))
        }
        if (sort) {
            dispatch(fetchData({ platform, sort }))
        }

    }, [category, dispatch, platform, sort])

    return (

        <HelmetProvider>
            <Helmet>
                <title>Explore Games</title>
            </Helmet>
            <section className='pt-14'>
                <div className="container py-5 px-4">
                    <div className="flex items-center justify-between flex-col sm:flex-row gap-2 gap-x-5 mt-3">
                        <h3 className="text-3xl font-semibold w-full text-left  basis-1/4">Explore</h3>
                        <div className="flex gap-2 justify-end md:gap-4 text-sm w-full basis-3/4">
                            <Select
                                name="platform"
                                options={platformData}
                                onChange={onChange}
                                isClearable={true}
                                placeholder="Platform"
                                className="react-select-container text-main basis-48"
                                classNamePrefix="react-select"
                            />
                            <Select
                                name="category"
                                options={categoryData}
                                onChange={onChange}
                                isClearable={true}
                                placeholder="Category"
                                className="react-select-container text-main basis-48"
                                classNamePrefix="react-select"
                            />
                            <Select
                                name="sortBy"
                                options={sortByData}
                                onChange={onChange}
                                isClearable={true}
                                placeholder="Sort"
                                className="react-select-container text-main basis-48"
                                classNamePrefix="react-select"
                            />
                        </div>
                    </div>
                    {!data?.loading ? <div className="">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 items-center justify-center mt-5">
                            {data.data?.slice(0, more).map((game, i) => (
                                <Game key={i} game={game} />
                            ))}
                        </div>
                        <div className="next-btn mt-5 w-full flex justify-center">
                            <button onClick={() => setMore(more + 12)} className='p-4 bg-second flex items-center gap-1 rounded'>Show More<MdExpandMore size={20} /></button>
                        </div>
                    </div> : <Loading />}
                </div>
            </section>
        </HelmetProvider>
    )
}

export default Games