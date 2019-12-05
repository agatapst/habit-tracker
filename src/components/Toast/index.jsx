import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NotifyError(error) {
  toast.error(`${error}`, {
    position: 'top-right'
  });
}
