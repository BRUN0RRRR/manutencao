import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import './LoginScreen.css';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Login temporario para testes locais
    if (username !== 'admin' || password !== '1234') {
      setError('Credenciais invalidas. Use admin / 1234');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      signIn("token-teste-admin", { username: "admin", role: "admin" });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="login-container">
      {/* Background decorativo */}
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
      
      <div className="login-card">
        {/* Header com logo/ícone */}
        <div className="login-header">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h1>Sistema de Manutenção</h1>
          <p className="subtitle">Gestão de Solicitações</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <span className="label-text">Usuário</span>
              <span className="label-hint">admin</span>
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                placeholder="admin"
                required
                autoComplete="username"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="label-text">Senha</span>
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <div className="error-message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Autenticando...
              </>
            ) : (
              <>
                <span>Acessar Sistema</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <a href="#" className="footer-link">Esqueceu a senha?</a>
          <span className="footer-divider">|</span>
          <a href="#" className="footer-link">Primeiro acesso?</a>
        </div>
      </div>

      {/* Decoração adicional */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  );
};

export default LoginScreen;
