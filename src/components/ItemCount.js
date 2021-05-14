const ItemCount = ({stock, initial, onAdd}) => {
    return(
        <div>
            Stock: {stock}
            <br/>
            <input id="cantidad" type="number" value={initial}></input>
            <br/>
            <button onClick={(e) => onAdd (e,1)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
