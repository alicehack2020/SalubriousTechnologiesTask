import { toast } from 'react-toastify';

export const successMessage=(message) => {
   toast.success(message);
}

export const errorsMessage=(message) => {
   toast.error(message);
}

