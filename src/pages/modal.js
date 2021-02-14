import React from 'react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { navigate } from "gatsby"

const ModalPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="modal">
        {/*<Link to={closeTo}>Close</Link>*/}

        <div className="modal__header">
          <h2 className="modal__title">You are awesome!</h2>

          <p className="modal__text"> We will send our proposal by email.</p>
        </div>

        <div className="contact-form-box">
          <form
            className="contact-form"
            action="/thanks/"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={event => {
              event.preventDefault()
              navigate(`/thanks`);
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
            </p>
            <p>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
            </p>

            <button className="modal__button button" type="submit">
              Get proposal
            </button>
          </form>
        </div>
      </div>
    )}
  </ModalRoutingContext.Consumer>
);

export default ModalPage;
