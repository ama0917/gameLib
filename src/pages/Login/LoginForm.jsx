import React, { useState } from 'react';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data
      console.log('Login submitted:', { username, password });
      // Reset form fields
      setUsername('');
      setPassword('');
      setErrors({});
    } else {
      // Set errors if any
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Username validation
    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    // Password validation
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && (
              <span className={styles.error}>{errors.username}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;