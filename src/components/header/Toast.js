import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component

function Toast() {
  const notify = () => toast("Go to orders, products, items!");

  return (
    <div>
      <Button
        onClick={notify}
        style={{
          position: "absolute",
          left: "40%",
          bottom: "50%",
          padding: "15px",
          backgroundColor: "violet",
        }}
      >
        Click Here to load products, users, orders
      </Button>
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
