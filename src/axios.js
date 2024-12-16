// src/axios.js
import axios from 'axios';

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',  // URL base de tu API de Node.js
  timeout: 5000, // Tiempo de espera máximo (opcional)
  headers: { 'Content-Type': 'application/json' } // Asegúrate de que tu backend acepte JSON
});

// Exporta la instancia para usarla en otros archivos
export default axiosInstance;
