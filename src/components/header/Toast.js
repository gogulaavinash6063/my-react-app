import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  const notify = () => toast("Go to orders, products, items!");

  return (
    <div>
      <button
        onClick={notify}
        style={{
          position: "absolute",
          left: "40%",
          bottom: "50%",
          padding: "15px",
          backgroundColor: "green",
        }}
      >
        Click Here to load products, users, orders
      </button>
      <ToastContainer
        style={{
            padding:"20px",
          position:"absolute",
          left:"40%",
        }}
      />
    </div>
  );
}

export default Toast;
