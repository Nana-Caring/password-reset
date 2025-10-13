import React, { useState } from 'react';
import { changePassword } from '../services/api';
import { validatePassword, validateConfirmation } from '../utils/validation';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import Button from './Button';

const PasswordChangeForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validatePassword(newPassword)) {
            setError('New password does not meet strength requirements.');
            return;
        }

        if (!validateConfirmation(newPassword, confirmPassword)) {
            setError('New password and confirmation do not match.');
            return;
        }

        try {
            await changePassword({ currentPassword, newPassword });
            setSuccess(true);
        } catch (err) {
            setError('Failed to change password. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="currentPassword">Current Password</label>
                <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="newPassword">New Password</label>
                <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <PasswordStrengthIndicator password={newPassword} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Password changed successfully!</p>}
            <Button text="Change Password" onClick={handleSubmit} />
        </form>
    );
};

export default PasswordChangeForm;