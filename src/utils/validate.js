export const checkValidData = (email,password) =>{
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]).{8,20}$/.test(password);

    if(!isEmailValid) return "Email is not valid !!";
    if(!isPasswordValid) return "Password is not valid";

    // else all are valid then return me no error
    return null;
}