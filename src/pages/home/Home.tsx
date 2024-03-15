import { menuRoutes } from '../../router/Router';



export const Home = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center  ' >
            <div className=' w-3/4 md:2/4 ' >
                <h1 className=" text-4xl font-bold text-center mb-8 md:text-7xl ">
                    <span className='text-white' >Hola, soy</span> Nestor Raul Camacho <span className='text-white'> Desarrollador Front-end</span>
                </h1>
            </div>
            <div className='grid grid-cols-2 gap-3 md:p-3 md:grid md:grid-cols-4 md:gap-5   ' >
                {
                    menuRoutes.map((route) => {
                        if (route.to === '/') {
                            return null
                        } else {
                            return (
                                <a href={route.to} className={route.className}   >
                                    <i className={`${route.icon} text-3xl text-white`} ></i>
                                </a>

                            )
                        }

                    })
                }

            </div>
            <div className='rounded-full bg-slate-300 mt-7 px-3 py-1' >
                <h5>Actualmente</h5>
            </div>
            <div className=' text-white mt-3 px-3 py-1' >
                <h5>Desarrollador Movil en:</h5>
            </div>
            <div className=' text-white'  >
                <h5>RSN IT Solutions</h5>
            </div>
        </div>
    )
}


//p-3 grid grid-cols-4 gap-5