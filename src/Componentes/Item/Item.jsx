// src/Componentes/Item/Item.js

import React, { useState } from 'react';
import styles from './Item.module.css';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiCancel } from 'react-icons/ti';
import { FaCheckCircle } from 'react-icons/fa';

export default function Item({ item, deleteById, editById }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputEdit, setInputEdit] = useState(item.name);

  const handleChange = (e) => {
    setInputEdit(e.target.value);
  };

  // --- ¡Asegúrate de que estas funciones estén presentes y correctas! ---
  const handleSaveEdit = () => {
    if (inputEdit.trim() !== '') {
      // Asegura que no se guarden nombres vacíos
      editById(item.id, inputEdit); // Llama a la función del padre con el ID y el nuevo valor
      setIsEditMode(false); // Sale del modo de edición
    }
  };

  const handleCancelEdit = () => {
    setInputEdit(item.name); // Restaura el valor original
    setIsEditMode(false); // Sale del modo de edición
  };

  const iconColorClass = item.isBought
    ? styles.iconColorWhite
    : styles.iconColorBlack;

  return (
    <div className={styles.liContainer}>
      {!isEditMode ? (
        // Modo de visualización: Muestra el nombre y los iconos de lápiz/eliminar
        <li
          style={
            item.isBought
              ? { backgroundColor: '#7CAE7A' }
              : { backgroundColor: '#FEFCFB', color: 'black' }
          }
          className={styles.item}
        >
          {item.name}
          <div className={styles.iconsContainer}>
            {/* ESTO ES CLAVE: El onClick del lápiz activa el modo de edición */}
            <BsPencilFill
              onClick={() => setIsEditMode(true)}
              // className={styles.editIcon}
              className={`${styles.editIcon} ${iconColorClass}`}
            />
            <RiDeleteBin5Line
              onClick={() => deleteById(item.id)}
              className={`${styles.deleteIcon} ${iconColorClass}`}
            />
          </div>
        </li>
      ) : (
        // Modo de edición: Muestra el input y los iconos de check/cancelar
        <div className={styles.editModeControls}>
          <input
            type='text'
            value={inputEdit} // El valor del input está controlado por el estado
            onChange={handleChange} // Cuando el input cambia, actualiza el estado inputEdit
            className={styles.editInput}
          />
          {/* ESTO ES CLAVE: El onClick del check llama a handleSaveEdit */}
          <FaCheckCircle onClick={handleSaveEdit} className={styles.saveIcon} />
          {/* ESTO ES CLAVE: El onClick de cancelar llama a handleCancelEdit */}
          <TiCancel onClick={handleCancelEdit} className={styles.cancelIcon} />
        </div>
      )}
    </div>
  );
}
