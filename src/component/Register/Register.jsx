import './Register.css';
import { useForm } from "react-hook-form";
export const Register = function () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='nom' {...register('Nom', {pattern: /^[A-Za-z]+$/i, required: true, minLength: 2})}/>
            <input placeholder='prénom' {...register('prénom', {pattern: /^[A-Za-z]+$/i, required: true, minLength: 3})}/>
            <input type="password" {...register('password', {pattern: /^[A-Za-z]+$/i, minLength: 8} )}/>
            <input type="email" {...register('email', { minLength: 8} )}/>
            <input type="submit"/>
        </form>
    );
}