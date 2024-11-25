import { useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button';
export const ContactUs = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader during submission

    try {
      // Send the data to the backend (your API endpoint)
      const response = await axios.post('http://localhost:8080/api/contact/user', inputs);

      if (response.data.status === 1) {
        setSubmitted(true); // Show thank you message if success
      } else {
        console.error('Error:', response.data.message);
        alert(response.data.message); // Show error message on failure
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form. Please try again.');
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
            <div className="mt-5 lg:w-96  mx-auto justify-center items-center">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full h-12"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mt-5 lg:w-96 mx-auto justify-center items-center">
              <input
                type="email"
                name="email"
                className="w-full  h-12"
                required
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mt-5 lg:w-96 mx-auto justify-center items-center">
              <input
                type="tel"
                name="mobile"
                className="w-full  h-12"
                onChange={handleChange}
                required
                placeholder="Phone No."
              />
            </div>
            <div className="mt-3 mb-5 lg:pb-3 mx-auto justify-center flex items-center">
              <Button>
                <button type="submit" className="px-4 py-2  text-white rounded-lg ">
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
