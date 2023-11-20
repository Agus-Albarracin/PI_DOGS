//stlye
import "./form.style.css"
//Hooks
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
//actions
import { postDog } from "../../redux/actions/actions";

function Form() {
  const inputRef = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allDogs  = useSelector(state => state.allDogs)


// Estado para data del formulario
    const [formData, setFormData] = useState({
      name: "",
      weight: "",
      height:"",
      life_span: "",
      temperament:[],
      image: "",
      createInDb: true
    });





// Control de cambios en los input 
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name)
      setFormData({...formData, [name]: value})
// setErrors(validation({...formData, [name]: value})); // si no lo paso asi, la validacion esta un paso atrasada
      isNameDuplicate()
      console.log(formData)
    }

    const handleInputTemp = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      
      setFormData({...formData, [name]:[value]})
    }

//control de cambios en la image
    const [preview, setPreview] = useState("")
    
    const handleImageClick = () =>{ inputRef.current.click();}

    const handleImage = (event) => {
      
      const file = event.target.files[0];
      setPreview(event.target.files[0])
      if (file && file.type.startsWith('image/')) setFormData({...formData, image: URL.createObjectURL(file)})
      else setFormData({...formData, image: ""})
    };
    
// Controla que no este repetido.
      const isNameDuplicate = () => {
      const nameDuplicate = allDogs.filter(dog => dog.name.toLowerCase() === formData.name.toLowerCase())
      if(nameDuplicate.length > 0) setErrors({...errors, name: "This breed alredy exists"})
    }
  

// envio de formulario
const handleSubmit = (event) =>{
   const regex =  
             formData.name.length === 0
           || formData.height.length === 0
           || formData.weight.length === 0
           || formData.life_span.length === 0

const regex1 = 
              (Number(formData.name) && formData.name.length < 15           ||  formData.name.length === 0)
           || (!Number(formData.height) && formData.life_span.length > 8    || formData.height.length === 0)
           || (!Number(formData.weight) && formData.life_span.length > 8    || formData.weight.length === 0)
           || (!Number(formData.life_span) && formData.life_span.length > 3 || formData.life_span.length === 0)
const regex2 = formData.temperament.length === 0 || Number(formData.temperament[0])
const regex3 = !formData.image

event.preventDefault();
if(regex1){ return alert(" error 404!: \n ....::::::::::::::  ¡¡COMPLETE TODOS LOS DATOS!! ::::::::::::::.... \n \n * El peso, la altura y los años de vida deben ser de formato númerico.\n * La raza en formato alfabetico y menos de 15 caracteres.\n !!!!!!!!!! check error !!!!!!!!!!! \n error 407!: * Por favor, deberia completar nuevamente los datos, hubo un error al extraerlo")}  
if(regex2){ return alert("error 404!: \n Complete los datos! \n * Los temperamentos debes ser de formato alfabetico.")}
if(regex3){ return alert(" error 404!: \n Complete los datos! \n * Debe ingresar una imagen")}
if(regex){  return alert("error 404!: \n * Debes completar nuevamente todos los campos!, de lo contrario no se cargaran exitosamente.")}

else{
      event.preventDefault();
      dispatch(postDog(formData))
      alert("Se ha creado la nueva raza!")
  
      setFormData({
        name: "",
        weight: "",
        height: "",
        life_span: "",
        temperament:[],
        image: "",
        createInDb: true
      });
    }
      navigate("/home");
}


return (
<main className="cont"><br/>

       <form className="form_cont" onSubmit={handleSubmit}> 
         <label htmlFor="text">Name</label><br></br>
         <input className="input_text" name="name" id="name" placeholder="write the race" onChange={handleInputChange}></input><br></br>

         <label htmlFor="text">weight</label><br></br>
         <input className="input_text" name="weight" id="weight" placeholder="write the weight" onChange={handleInputChange}></input><br></br>

         <label htmlFor="text">height</label><br></br>
         <input className="input_text" name="height" id="height" placeholder="write the height" onChange={handleInputChange}></input><br></br>

         <label htmlFor="text">Life span</label><br></br>
         <input className="input_text" name="life_span" id="life_span" placeholder="write the life span" onChange={handleInputChange}></input><br></br>

         <label htmlFor="text">Temperaments</label><br></br>
         <input className="input_text"  name="temperament" id="temperament" placeholder="write the temperaments" onChange={handleInputTemp}></input><br></br><br></br>

         <button type="submit" className="boton_form" onClick={handleSubmit}>CREATE</button>
      </form>

    <div className="form_cont_izq">
        <div className="box_file_image" onClick={handleImageClick}><br/>
          <input
            name="image"
            id="image"
            className="input_img"
            type="file"
            accept='image/*'
            ref={inputRef}
          
          onChange={handleImage}
          />
          { preview ? <img className="img_u" src={URL.createObjectURL(preview)} key={image.name} />
                    : <img className="img_u" src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" />
          }

        </div>
     </div>
 </main>);

}

export default Form;