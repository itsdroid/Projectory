import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginEmployee, registerEmployee } from "../../auth/state/auth/authAction.jsx"
import { useNavigate } from "react-router";

export default function useAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onRegisterSubmit = async (data) => {
        console.log(data);
        try {
            await dispatch(registerEmployee(data));
            navigate('/login');
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    const onLoginSubmit = async (data) => {
        try {
            await dispatch(loginEmployee(data));
        } catch (error) {
            console.error("Login failed", error);
        }
        console.log(data);
    };

    return {
        register,
        handleSubmit,
        onRegisterSubmit,
        onLoginSubmit,
        errors,
        navigate,
    };
}
