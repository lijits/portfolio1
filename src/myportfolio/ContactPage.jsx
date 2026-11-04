import React, { forwardRef } from 'react';

const ContactPage = forwardRef((props, ref) => {
  return (
    <div className="page page-back-cover bg-dark text-white p-4" ref={ref}>
      <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-4">
        <span className="fw-bold text-warning">05</span>
        <h5 className="mb-0 text-uppercase">Connect</h5>
      </div>

      <div className="my-auto text-center">
        <h3 className="fw-bold mb-3">Let's Build Together</h3>
        <p className="small text-muted mb-4">Available for Full Stack Development roles and collaborative web application projects.</p>

        <div className="text-start bg-secondary bg-opacity-25 p-3 rounded mb-4">
          <p className="small mb-2">📧 <strong>Email:</strong> <a href="mailto:lijijomijomi@gmail.com" className="text-warning text-decoration-none">lijijomijomi@gmail.com</a></p>
          <p className="small mb-2">📞 <strong>Phone:</strong> +91 6235005440 | +91 7904791956</p>
          <p className="small mb-0">📍 <strong>Location:</strong> Parassala, Trivandrum, Kerala, India</p>
        </div>

        <button className="btn btn-warning btn-lg w-100 fw-bold shadow" onClick={props.onHireMeClick}>
          💼 Hire Me Now
        </button>
      </div>
    </div>
  );
});

export default ContactPage;