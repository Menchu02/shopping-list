import React, { useState } from 'react';
import Item from '../Item/Item';
import Navbar from '../Navbar/Navbar';
import ProductForm from '../ProductForm/ProductForm';
import styles from './itemList.module.css';
import { v4 as uuid } from 'uuid';

let idToModify = '';
let productList = [
  {
    id: '1',
    name: 'Patatas',
    isBought: false,
  },
  {
    id: '2',
    name: 'Leche',
    isBought: true,
  },
  {
    id: '3',
    name: 'Huevos',
    isBought: false,
  },
  {
    id: '4',
    name: 'Cerveza',
    isBought: true,
  },
];
export default function ItemList() {
  //estado principal de la base de datos que aparece por defecto(prductList)
  const [products, setProducts] = useState(productList);

  //FUNCIONES PRINCIPALES DEL CRUD SE CREAN EN EL PADRE

  //ELIMINAR
  const deleteById = (idItem) => {
    // no podemos modificar directamente el estado, hay que crear una data nueva y añadirla
    // a la función que transforma el estado(setProducts)
    let newData = products.filter((item) => item.id !== idItem);
    // filtrame en una variable nueva todos los id q no sean igual al que quiero eliminar
    //  filtra en newData todos los items que sean distintos al que quiero eliminar
    console.log(newData);
    //añado esta nueva data al setProducts para hacer el cambio de estado
    setProducts(newData);
  };
  //EDITAR
  const editById = (idItem) => {
    idToModify = idItem;
    console.log(idToModify);
  };
  //AÑADIR
  const addItem = (value) => {
    console.log(value);
    const newItem = {
      name: value,
      id: uuid(),
      isBought: false,
    };
    setProducts([...products, newItem]);
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <Navbar />
        <ProductForm addItem={addItem} />
        <ul className={styles.itemContainer}>
          {products.map((item) => (
            //recorre el array products y envía cada item al componente Item
            <Item
              item={item}
              //clave={valor}
              deleteById={deleteById}
              editById={editById}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
