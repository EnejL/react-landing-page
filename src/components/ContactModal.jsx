import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateForm = () => {
		let errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.name) errors.name = "Name and surname are required";
		if (!formData.email || !emailRegex.test(formData.email))
			errors.email = "Valid email is required";
		if (!formData.message) errors.message = "Message is required";

		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();

		if (Object.keys(validationErrors).length === 0) {
			// Handle successful form submission (e.g., send email)
			console.log("Form submitted:", formData);
			onClose(); // Close modal after submission
		} else {
			setErrors(validationErrors);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
				{/* Close button */}
				<button
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
					onClick={onClose}
				>
					&times;
				</button>

				<h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Name and Surname
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
								errors.name ? "border-red-500" : "border-gray-300"
							}`}
							required
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">{errors.name}</p>
						)}
					</div>

					<div className="mb-4">
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
								errors.email ? "border-red-500" : "border-gray-300"
							}`}
							required
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">{errors.email}</p>
						)}
					</div>

					<div className="mb-4">
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Message
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
								errors.message ? "border-red-500" : "border-gray-300"
							}`}
							rows="4"
							required
						/>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">{errors.message}</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactModal;
