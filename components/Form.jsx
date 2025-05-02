"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // SheetMonkey API endpoint
    const sheetMonkeyURL =
      "https://api.sheetmonkey.io/form/nUdpy9AWDieD5iZXBjZ5MT";

    // Create form data for SheetMonkey
    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.name);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append("Phone", formData.phone);
    formDataToSend.append(
      "Terms Accepted",
      formData.termsAccepted ? "Yes" : "No"
    );
    formDataToSend.append("Date", new Date().toISOString());

    try {
      const response = await fetch(sheetMonkeyURL, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Form submitted successfully!",
      });
      setFormData({ name: "", email: "", phone: "", termsAccepted: false });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="p-4 flex flex-col justify-center items-start pb-8 md:pb-16">
        <h2 className="text-center w-full pb-6 text-lg md:text-3xl text-[#454F40]">
          Contact us to explore our,
          <span className="text-[#455072] pl-2">innovative technology</span>
        </h2>
        <p className="text-center w-full">
          Contact us, ask your questions and find out what our technology can do
          for your company.
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-16 bg-[#FBFBFB]">
        <div className="grid items-center md:pl-8">
          {submitStatus && (
            <div className={`status-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="termsAccepted" className="text-sm">
                By clicking Submit, I declare that all information provided is
                true and that I am aware of the conditions of participation. *
              </label>
              {errors.termsAccepted && (
                <span className="error-message">{errors.termsAccepted}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button w-full"
            >
              {isSubmitting ? "Submitting..." : "Sign up"}
            </button>
          </form>

          <style jsx>{`
            .form-container {
              max-width: 500px;
              margin: 0 auto;
              padding: 20px;
            }
            .form-group {
              margin-bottom: 20px;
            }
            label {
              display: block;
              margin-bottom: 5px;
              font-weight: 500;
            }
            input,
            textarea {
              width: 100%;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
            }
            .checkbox {
              display: flex;
              align-items: center;
            }
            .checkbox input[type="checkbox"] {
              width: auto;
            }
            .checkbox label {
              margin-left: 10px;
              margin-bottom: 0;
            }
            .error {
              border-color: #ff0000;
            }
            .error-message {
              color: #ff0000;
              font-size: 0.8rem;
              margin-top: 5px;
              display: block;
            }
            .submit-button {
              background-color: #4caf50;
              color: white;
              padding: 10px 15px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 1rem;
            }
            .submit-button:disabled {
              background-color: #cccccc;
              cursor: not-allowed;
            }
            .status-message {
              padding: 10px;
              margin-bottom: 20px;
              border-radius: 4px;
            }
            .status-message.success {
              background-color: #dff0d8;
              color: #3c763d;
            }
            .status-message.error {
              background-color: #f2dede;
              color: #a94442;
            }
          `}</style>
        </div>
        <div>
          <video className="hidden md:block" src="form-vide.mp4" autoPlay muted loop></video>
        </div>
      </div>
    </div>
  );
}
