import React, { useState } from 'react';
import styles from './productForm.module.css';

export default function ProductForm({ addItem }) {
  const [input, setInput] = useState('');
  // lo ideal esq el estado sea un objeto, pero como solo tenemos un input
  // puede inicializarse con un string vacío

  const handlerChange = (value) => {
    console.log(value);
    setInput(value);
  };
  const handlerAdd = () => {
    addItem(input);
    setInput('');
  };
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={input}
          type='text'
          onChange={(e) => handlerChange(e.target.value)}
          placeholder='Añade producto'
        ></input>
        <button className={styles.addButton} onClick={() => handlerAdd()}>
          Añadir
        </button>
        {/* <button>Editar</button> */}
      </div>
    </div>
  );
}
