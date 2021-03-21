import React, {useState} from "react";

const AddFoodForm = ({addFood}) => {
    const initialState =     {
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: "",
        type: ""
      }
    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        })) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(formData))
        addFood({...formData}, formData.type)
        setFormData(initialState)
    }


    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />

        <label htmlFor="description">Description</label>
            <input 
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            />

        <label htmlFor="recipe">Recipe</label>
            <input 
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            />

        <label htmlFor="serve">Serve</label>
            <input 
            id="serve"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
        />

        <label htmlFor="type">Snack or Drink?</label>
            <input 
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
        />


            <button>Add</button>
        </form>

    )
}

export default AddFoodForm;