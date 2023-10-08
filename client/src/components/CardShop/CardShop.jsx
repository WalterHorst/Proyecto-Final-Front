import style from './CardShop.module.css'

const CardShop = ({ id, name, date, total, units, image }) => {


  return (
    <div className={style.list}>
        <ul className={`list-group ${style.card}`}>

            <div className="card mb-3">

            <div className="row g-0">
                <div className="col-md-4">
                <img src="" alt="" className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">{date}</small></p>
                </div>
                <button>Detalle</button>
                </div>
            </div>
            
            </div>

        </ul>
    </div>
  )
}

export default CardShop;