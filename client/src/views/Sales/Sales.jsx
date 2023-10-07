import ah from "../../assets/aboutProfileImages/ah.jpg";

const Sales = () => {
    const compras = [
        {
            date: '05/10/2023',
            compra: 'vslfnj23498ad',
            total: 23.342,
            name: 'Pelota',
            unidades: 3,
            imagen: ah
        },
        // {
        //     date: '24/11/2024',
        //     compra: 'lñajasfdasd234',
        //     total: 10.424,
        //     name: 'Comida',
        //     unidades: 1,
        //     imagen: ah
        // }
    ]
    return(
        <div>
            <h1>Mis compras</h1>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={ah} alt="" className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">

                        <h5 className="card-title">{compras[0].name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">{compras[0].date}</small></p>
                    </div>
                    <button>Detalle</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sales;