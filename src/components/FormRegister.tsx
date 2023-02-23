import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import 'twin.macro'

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })}
                aria-invalid={errors.firstName ? "true" : "false"}
            />
            <p tw="text-red-500">{errors.firstName ? <span >Please fill Invalid First Name</span> : <span></span>}</p>

            <Input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
            <p tw="text-red-500">{errors.firstName ? <span >Please fill Invalid First Name</span> : <span></span>}</p>

            <Input type="number" {...register("age", { min: 18, max: 99 , })} />
            <p>{errors.age && <span>This field is required</span>}</p>
            <Button type="submit" >Submit</Button>
        </form>
    );
}