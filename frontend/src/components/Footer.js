import '../App.css'

function Footer() {
    return(
        <div className='h-80 bg-amber-500 px-12 py-12 px-40'>
            <div className='flex flex-rows'>
                <div className='w-1/4 h-full '>
                    <div className='h-36 w-36 rounded-full bg-slate-300 mb-4'>

                    </div>
                    <p className='font-bold'>Mondokki</p>
                </div>
                <div className='w-1/4'>
                    <p className='font-bold'>Explore</p>
                    <p>About</p>
                    <p>Facilities</p>
                    <p>Map</p>
                    <p>Book Now</p>
                </div>
                <div className='w-1/4'>
                    <p className='font-bold'>Contact</p>
                    <p>"Address"</p>
                    <p>"Phone"</p>
                    <p>"Email"</p>
                </div>
            </div>
        </div>
    )
}

export default Footer