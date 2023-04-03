import './Connexion.css';
import {useForm} from "react-hook-form";

export const Connexion = function () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="password" {...register('password', {pattern: /^[A-Za-z]+$/i, minLength: 8} )}/>
            <input type="email" {...register('email', { minLength: 8} )}/>
            <input type="submit"/>
        </form>
    );
}