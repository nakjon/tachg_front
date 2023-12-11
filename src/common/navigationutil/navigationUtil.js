// navigationUtils.js
import { useNavigate } from 'react-router-dom';

// Initialize the navigate function
let navigate

export function initializeNavigation(navigateFn) {
  navigate = navigateFn();
}

export function getNavigate() {
  if (!navigate) {
    throw new Error('Navigation not initialized. Call initializeNavigation before using getNavigate.');
  }
  return navigate ;
}
