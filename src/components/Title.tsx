

interface Props {

    title: string

}

export const Title = ({ title }: Props) => {
    return (
        <>
            <div
                className='px-16 py-5 container mx-auto flex flex-row mt-4  border-b-stone-50 items-center'
            >
                <a className="back mr-4 " href="/">
                    <i className="fa-solid fa-arrow-left text-white text-3xl"></i>
                </a>
                <h1 className='text-white' >{title } </h1>

            </div>
            <div
                className='container mx-auto flex flex-row mt-4 border-b-2  border-b-stone-50'
            >


            </div>
        </>
    )
}
