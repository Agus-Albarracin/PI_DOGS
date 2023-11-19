import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDog } from '../../redux/actions/actions'
import validation from './validation';
import style from "./form.module.css"
import { useNavigate } from 'react-router-dom';

function Form () {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allDogs  = useSelector(state => state.allDogs)



  // Estado para data del formulario
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image: ""
  });

  // Estado para errores
  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: "",
    image: ""
  });

  // Control de cambios en los input 
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value})
    setErrors(validation({...formData, [name]: value})); // si no lo paso asi, la validacion esta un paso atrasada
    isNameDuplicate()
  }
//temps
  const handleInputTemp = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    console.log(value)
    setFormData({...formData, [name]:[value]})
  }
  
  // Maneja la seleccion de imagen
  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) setFormData({...formData, image: URL.createObjectURL(file)})
    else setFormData({...formData, image: ""})
  };

  const isNameDuplicate = () => {
    const nameDuplicate = allDogs.filter(dog => dog.name.toLowerCase() === formData.name.toLowerCase())
    if(nameDuplicate.length > 0) setErrors({...errors, name: "This breed alredy exists"})
  }

  const handleSubmit = (event) =>{

    event.preventDefault();
    dispatch(postDog(formData))
    alert("Your breed was created succesfully!")

    setFormData({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      temperaments: [],
      image: ""
    });

    navigate("/home")
  }

  const disableSubmit = () => {
    if(!formData.name || !formData.height || !formData.weight || !formData.life_span || !formData.image) return false;
    if(errors.name || errors.height || errors.weight || errors.life_span || errors.image) return false;
    return true
  }

  return (

      <div className={style.formContainer}>
        <h2>Complete the form to add your dog breed</h2>

        <form onSubmit={handleSubmit}>
          <div className={style.formData}>
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" id="name" placeholder="Enter the name" autoComplete="off" value={formData.name} onChange={handleInputChange}/>
            {errors.name && <span className={style.error}>{errors.name}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="height">HEIGHT</label>
            <br />
            <input type="text" name="height" id="height" placeholder="Min - Max height in cm" autoComplete="off" value={formData.height} onChange={handleInputChange}/>
            {errors.height && <span className={style.error}>{errors.height}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="weight">WEIGHT</label>
            <br />
            <input type="text" name="weight" id="weight" placeholder="Min - Max weight in kg" autoComplete="off" value={formData.weight} onChange={handleInputChange}/>
            {errors.weight && <span className={style.error}>{errors.weight}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="life_span">LIFE SPAN</label>
            <br />
            <input type="text" name="life_span" id="life_span" placeholder="Min - Max life span in years" autoComplete="off" value={formData.life_span} onChange={handleInputChange}/>
            {errors.life_span && <span className={style.error}>{errors.life_span}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="image">IMAGE</label>
            <br />
            {/* <input type="text" name="image" id="image" value={formData.image} onChange={handleInputChange}/> */}
            <input type="file" accept='image/*' name="image" id="image" onChange={handleImage}/>
            {errors.image && <span className={style.error}>{errors.image}</span>}
          </div>

          <div >
          <label htmlFor="text">Temperamentos</label><br></br>
          <input className={style.formData} name="temperament" id="temperament" placeholder="Escriba los temperamentos" onChange={handleInputTemp}>
         </input>
          </div>

          <div>
            <button type="submit" disabled={!disableSubmit()}>¡WOOF!</button>
          </div>
        </form>

        <div className={style.formDataTemp}>
          {formData.temperaments.map(temp =>
            <div className={style.formTemperaments} key={temp}>
              <p>{temp}</p>
              <button onClick={() => handleTemperamentDelete(temp)}>X</button>
            </div>
          )}
        </div>

      </div>
  )
}

export default Form