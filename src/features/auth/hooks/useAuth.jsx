import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import loginEmployee from "../../auth/state/auth/authAction.jsx"

export default function useAuth() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onRegisterSubmit = (data) => {
        console.log(data);
    };

    const onLoginSubmit = (data) => {
        dispatch(loginEmployee(data));

    };

    return {
        register,
        handleSubmit,
        onRegisterSubmit,
        onLoginSubmit,
        password,
        errors,
    };
}
