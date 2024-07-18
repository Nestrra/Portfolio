import { Title } from "../../components/Title"


export const Proyects = () => {
  return (
    <div>

      <Title
        title="Proyectos"
      />

      <div className="px-24" >
        <div className="px-9 mt-8   mb-8  " >
          <h1 className= 'text-4xl font-bold md:text-3xl' >
            InformaWeb
          </h1>
          <p className="text-white text-justify mt-3 " >
            Informaweb es un sistema ERP diseñado para gestionar y optimizar los procesos empresariales, incluyendo finanzas, recursos humanos, ventas, inventarios y más. A pesar de sus robustas funcionalidades, el sistema ha recibido comentarios sobre la dificultad de uso y la experiencia del usuario no intuitiva. Este proyecto tiene como objetivo abordar estos desafíos mediante la mejora de la interfaz de usuario (UI) y la experiencia del usuario (UX) de Informaweb.
          </p>
        </div>
          <a className="text-white ml-3 " target='_blank' href="https://drive.google.com/file/d/1fK0NDft6d9TMfXy2FIgrQ1U8sw5f8tAB/view?usp=sharing"  >Link</a>
      </div>
      <div className="px-24" >
        <div className="px-9 mt-8   mb-8  " >
          <h1 className= 'text-4xl font-bold md:text-3xl' >
            NRCCINE
          </h1>
          <p className="text-white text-justify mt-3 " >
          Diseñé una aplicación web intuitiva y moderna para la compra de boletos de cine. Esta plataforma permite a los usuarios buscar películas, seleccionar horarios y reservar sus asientos de manera sencilla y rápida. El diseño está enfocado en ofrecer una experiencia de usuario fluida y accesible, con un enfoque especial en la navegación y la facilidad de uso.

          </p>
        </div>
          <a className="text-white ml-3 " href="https://drive.google.com/file/d/1dhCfdErnrd8xpPMdda2vwDPCmTs_GEBS/view?usp=sharing" target='_blank' >Link</a>
      </div>

      <div className="px-24" >
        <div className="px-9 mt-8   mb-8  " >
          <h1 className= 'text-4xl font-bold md:text-3xl' >
          TicketRock
          </h1>
          <p className="text-white text-justify mt-3 " >
          La aplicación TicketRock ofrece a los aficionados de la música rock una manera sencilla y rápida de comprar boletos para los conciertos de sus bandas favoritas en cualquier momento y lugar.

          </p>
        </div>
          <a className="text-white ml-3 " href="https://drive.google.com/file/d/1OEHwZI1T0wzWXz8FoRzWgwLc7IQamCo4/view?usp=sharing" target='_blank' >Link</a>
      </div>


    </div>
  )
}
