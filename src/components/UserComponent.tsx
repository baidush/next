// src/components/UserComponent.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';  // Importing custom hooks
import { fetchUsers } from '../features/userSlice';

const UserComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, status, error } = useAppSelector(state => state.users);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h1>Users</h1>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
