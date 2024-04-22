// src/pages/create-user.tsx
import React from 'react';
import UserForm from '../src/components/UserForm';

const CreateUser: React.FC = () => {
    const handleSuccess = () => {
        alert('User created successfully!');
    };

    return (
        <div>
            <h1>Create User</h1>
            <UserForm onSuccess={handleSuccess} />
        </div>
    );
};

export default CreateUser;
