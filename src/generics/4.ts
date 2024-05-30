type UserProfile = {
     name: string;
     surname: string;
     email: string;
     password: string;
};
    
function createOrUpdateUser(initialValues: Partial<UserProfile>) {
    // Оновлення користувача
    const defaultUser: UserProfile = {
        name:"",
        surname:"",
        email:"",
        password:""
    };
    return {...defaultUser,...initialValues}
}
    
createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
});
    