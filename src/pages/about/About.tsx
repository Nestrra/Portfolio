import { Title } from "../../components/Title"


export const About = () => {
    return (
        <>
            <Title
                title="Sobre Mi"
            />
            <div className='px-6 md:container md:mx-auto md:flex md:flex-col mt-14 ' >
                <p className='text-slate-300 text-xl text-justify' >Front-end Developer con experiencia en el desarrollo de aplicaciones web y móviles utilizando
                    tecnologías como React y React Native. Actualmente en proceso de ampliar conocimientos en
                    tecnologías de desarrollo de software para mejorar la eficiencia y calidad en el desarrollo de
                    proyectos. Apasionado por aprender y mantenerse actualizado con las últimas tendencias y mejores
                    prácticas en el campo de la programación.</p>
                <h2 className=" font-medium text-3xl mt-5 text-cyan-500">En mis tiempos libres:</h2>
                <p className=' text-slate-300  text-xl text-justify mt-3 ' >- La familia: es fundamental para mí. Disfruto pasar tiempo de calidad con mis seres queridos,
                    ya sea compartiendo una cena casera, viendo una película juntos o simplemente disfrutando de una tarde de juegos de mesa.</p>
                <p className=' text-slate-300  text-xl text-justify mt-3 ' >- La Bicicleta: Nada supera la sensación de libertad que experimento cuando estoy montando en bicicleta. Ya sea explorando
                    senderos naturales o recorriendo la ciudad, siempre estoy listo para una emocionante aventura sobre dos ruedas.</p>
                <p className=' text-slate-300  text-xl text-justify mt-3 mb-3' >- Aprendizaje Autodidacta:
                    Soy un firme creyente en el poder del aprendizaje autodidacta. Siempre estoy buscando oportunidades para expandir mis conocimientos y
                    mejorar mis habilidades, ya sea explorando nuevas
                    tecnologías o sumergiéndome en temas fuera del mundo del desarrollo.</p>
            </div>
        </>
    )
}
