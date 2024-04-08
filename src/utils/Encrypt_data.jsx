// encryptionFunctions.js
import CryptoJS from 'crypto-js';

// Read the secret key from environment variables
const secretKey = process.env.REACT_APP_SECRET_KEY;

// Encrypt data using AES
export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
  return encryptedData;
}

// Decrypt data using AES
export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}


