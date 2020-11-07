import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS Fisico: IP da maquina
 * Android com emulador: adb reverse tcp:3333 tcp:3333 para usar localhost
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotiom)
 * Android Fisico: IP da maquina
 */
