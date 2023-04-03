import './Product.css';
import { useForm } from "react-hook-form";

export const Product = function () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            {/*Enregistre la donnée en invoquant la fonction register*/}
            <input placeholder='Nom du produit'{...register('productName', {required: true})} />
            <textarea placeholder='Description' {...register("description", {required: true})}/>
            {errors.exampleRequired && <span>Ce champ est obligatoire</span>}
            <input type="submit" />
        </form>

    );
}