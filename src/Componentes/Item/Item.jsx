import React, { useState } from 'react';
import styles from './Item.module.css';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiCancel } from 'react-icons/ti';
import { FaCheckCircle } from 'react-icons/fa';

export default function Item({ item, deleteById, editById }) {
  //estado para saber si estams en modo edicción o no
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputEdit, setInputEdit] = useState(item.name);

  const handleChange = (e) => {
    setInputEdit(e.target.value);
    console.log(inputEdit);
  };

  return (
    <div className={styles.liContainer}>
      {/* si no es editMode, entonces escribeme el titulo */}
      {!isEditMode ? (
        <li
          onClick={() => setIsEditMode(true)}
          style={
            item.isBought
              ? { backgroundColor: '#7CAE7A' }
              : { backgroundColor: '#FEFCFB', color: 'black' }
          }
          className={styles.item}
        >
          {item.name}
          <div className={styles.iconsContainer}>
            <BsPencilFill />
            <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
            {/* <VscError /> */}
          </div>
        </li>
      ) : (
        <div>
          <input type='text' value={inputEdit} onChange={handleChange} />

          <FaCheckCircle onClick={() => editById(item.id)} />
          <TiCancel onClick={() => setIsEditMode(false)} />
        </div>
      )}
    </div>
  );
}
// className={item.isBought ? 'verde' : 'rojo'}
