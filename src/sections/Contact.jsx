import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20 bg-white" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col bg-white">
        <div className="contact-container text-center">
          <h3 className="head-text text-black">Let's talk</h3>
          <p className="text-lg text-gray-600 mt-3">
            Join today to understand STEM better.
          </p>

          {/* Enquire Now Button */}
          <button
            className="mt-10 mb-6 w-fit px-6 py-3 bg-white text-black border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition-all"
            type="button"
          >
            Enquire Now
            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="inline-block ml-2 w-4 h-4"
            />
          </button>

          {/* Form could be added here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
