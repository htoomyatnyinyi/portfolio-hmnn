import React, { useState } from "react";

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to store submitted contacts
  const [contacts, setContacts] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new contact to contacts array
    setContacts((prevContacts) => [...prevContacts, formData]);

    // Optional: Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Optional: Show confirmation
    console.log("Contact submitted:", formData);
    console.log("All contacts:", [...contacts, formData]);
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"
    >
      <div className="w-full max-w-md sm:max-w-2xl mx-4 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-300 animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
          Contact Me
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
          Reach out to me from across the galaxy!
        </p>
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="animate-slide-in-left">
            <label
              htmlFor="name"
              className="block mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>
          <div className="animate-slide-in-right">
            <label
              htmlFor="email"
              className="block mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>
          <div className="animate-fade-in-up delay-200">
            <label
              htmlFor="message"
              className="block mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="3 sm:rows-4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full font-medium py-2 sm:py-3 bg-cyan-900 dark:bg-white text-white dark:text-cyan-900 rounded-md hover:bg-cyan-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 animate-none text-sm sm:text-base"
          >
            Send Message
          </button>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center animate-fade-in delay-300">
            I'll get back to you faster than a shooting star!
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact; // import React from "react";

// const Contact = () => {
//   return (
//     <div
//       id="contact"
//       className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"
//     >
//       <div className="w-full max-w-md sm:max-w-2xl mx-4 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-300 animate-fade-in-up">
//         <h2 className="text-2xl sm:text-3xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
//           Contact Me
//         </h2>
//         <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
//           Reach out to me from across the galaxy!
//         </p>
//         <form className="space-y-4 sm:space-y-6">
//           <div className="animate-slide-in-left">
//             <label
//               htmlFor="name"
//               className="block mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Name"
//               className="w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
//             />
//           </div>
//           <div className="animate-slide-in-right">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your Email"
//               className="w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
//             />
//           </div>
//           <div className="animate-fade-in-up delay-200">
//             <label
//               htmlFor="message"
//               className="block mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               placeholder="Your Message"
//               rows="3 sm:rows-4"
//               className="w-full p-2 sm:p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full font-medium py-2 sm:py-3 bg-cyan-900 dark:bg-white text-white dark:text-cyan-900 rounded-md hover:bg-cyan-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 animate-pulse text-sm sm:text-base"
//           >
//             Send Message
//           </button>
//           <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center animate-fade-in delay-300">
//             I'll get back to you faster than a shooting star!
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
