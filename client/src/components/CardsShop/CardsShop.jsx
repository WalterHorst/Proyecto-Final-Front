import CardShop from "../CardShop/CardShop"

const CardsShop = ({compras}) => {


  return (
    <div>
        {compras
        ? (compras.map(compra => {
            return (
                <CardShop
                    key={compra.id}
                    id={compra.id}
                    name={compra.name}
                    date={compra.date}
                    units={compra.units}
                    image={compra.image}
                    total={compra.total}
                />
            )
        }))
        : <h2>Sin compras</h2>
        }
      
    </div>
  )
}

export default CardsShop
