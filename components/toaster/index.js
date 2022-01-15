
import { ToastContainer } from 'react-toastify';

const ToasterNotification = () => {

    return (
        <div>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover 
            />
        </div>
    )
}

export default ToasterNotification;