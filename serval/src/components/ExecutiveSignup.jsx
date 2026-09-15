import { useState } from "react";
import axios from "axios";
function ExecutiveSignup() {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    level: "",
    position: "",
    phone: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    passport: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
          SUG/Faculty/Depertment Executive Registration
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Federal Polytechnic Ede Students' Union Government and Faculties
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

        
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          >
            <option value="">Select Level</option>
            <option>ND II</option>
            <option>HND II</option>
          </select>

          <input
            type="text"
            name="position"
            placeholder="Executive Position"
            value={formData.position}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>


          

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Passport Photograph
            </label>

            <input
              type="file"
              name="passport"
              accept="image/*"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <div className="md:col-span-2 flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />

            <p className="text-sm text-gray-600">
              I confirm that I am a duly elected SUG/Faclty/Department Executive of
              Federal Polytechnic Ede.
            </p>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Register Executive
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExecutiveSignup;