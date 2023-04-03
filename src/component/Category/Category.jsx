import './Category.css';
import { useForm } from "react-hook-form";

export const Category = function () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Nom de la category' {...register("category")} />
            <select {...register("categoryName")}>
                <option value="zen">zen</option>
                <option value="babiole">babiole</option>
                <option value="autre">autre</option>
            </select>
            <input type="submit" />
        </form>
    );
}