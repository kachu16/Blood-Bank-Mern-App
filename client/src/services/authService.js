import { userLogin } from '../redux/slice/authActions';
import store from '../redux/store';

export const handleLogin = (e, role, email, password) => {
    e.preventDefault();
    try {
        store.dispatch(userLogin({ role, email, password }));
        console.log('Login Detail', role, email, password)
    } catch (error) {
        console.log(error);
    }
}

export const handleRegister = (e, role, email, password, name, organizationName, hospitalName, address, phone) => {
    e.preventDefault();
    try {
        console.log('Register Detail', role, email, password, name, organizationName, hospitalName, address, phone)
    } catch (error) {
        console.log(error)
    }
}