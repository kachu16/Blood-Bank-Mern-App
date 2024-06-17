
export const handleLogin = (e,email, password, role)=> {
    e.preventDefault();
    try {
        console.log('login:',email, password);
        
    } catch (error) {
        console.log(error);
    }
};



export const handleSignUp = (e,email, password, name, role, organizationName, hospitalName, address, phone)=> {
    e.preventDefault();
    console.log('signup:',email, password, name, role, organizationName, hospitalName, address, phone);
};
