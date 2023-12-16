const ItemsList = (items)=>{
    console.log(items);
    return(
<div>
    {/* Iterating over the recommended list/array of objects using map() */}
            {/* {resMenu?.map((item) => (

              <div key={item.card.info.id} className="menu-card">
                <div className="menu-left">
                  <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                  <p className="font-semibold">{"₹"+ item.card.info.price / 100}</p>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="menu-right">
                  <img src={IMG_URL + item.card.info.imageId} alt="Item" />
                  <button id="addBtn">ADD</button>
                </div>
              </div>
            ))} */}

</div>
    )
};


export default ItemsList;