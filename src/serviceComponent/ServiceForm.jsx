import { useState } from 'react';
import { Button } from '../components/Button';
import axios from 'axios';

export const ContactUs = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [loading, setLoading] = useState(false); // State to track loading state

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader during submission

    try {
      await axios.post('http://localhost:8080/api/contact/user', inputs);
      console.log(inputs);
      setSubmitted(true); // Show thank you message
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setLoading(false); // Hide loader after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="items-center mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : submitted ? (
          <div className="mt-5 lg:w-96 mx-auto justify-center items-center">
            <h2 className="text-center text-lg font-semibold">Thank you for submitting!</h2>
          </div>
        ) : (
          <>
            <div className="mt-5 lg:w-96 mx-auto justify-center items-center">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full"
                placeholder="Full Name"
                required
                style={{
                  borderBottom: '2px solid',
                  outline: 'none',
                  height: '50px',
                  paddingLeft: '15px',
                }}
              />
            </div>
            <div className="mt-5 lg:w-96 mx-auto justify-center items-center">
              <input
                type="email"
                name="email"
                className="w-full"
                required
                onChange={handleChange}
                placeholder="Email"
                style={{
                  borderBottom: '2px solid',
                  outline: 'none',
                  height: '50px',
                  paddingLeft: '12px',
                }}
              />
            </div>
            <div className="mt-5 lg:w-96 mx-auto justify-center items-center">
              <input
                type="tel"
                name="mobile"
                className="w-full"
                onChange={handleChange}
                required
                placeholder="Phone No."
                style={{
                  borderBottom: '2px solid',
                  outline: 'none',
                  height: '50px',
                  paddingLeft: '15px',
                }}
              />
            </div>
            <div className="mt-3 mb-5 lg:pb-3 mx-auto justify-center flex items-center">
              <Button>
                <button type="submit" value="Send">
                  Send
                </button>
              </Button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};
