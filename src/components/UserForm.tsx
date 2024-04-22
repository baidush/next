// src/pages/create-user.tsx
import React, { useState } from 'react';

const CreateUser: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) throw new Error('Failed to create user');
            const data = await response.json();
            alert(`User created: ${data.id}`);
            setName('');
            setEmail('');
        } catch (err) {
            setError('Failed to create user');
            console.error(err);
        }

        setLoading(false);
    };

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    Create User
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default CreateUser;
