import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ onAddStudent }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    studentNumber: "",
    course: "BSIT",
    courseDescription: "",
    yearLevel: "1st Year",
    sex: "Male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    navigate("/students");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="block text-sm font-medium">Fullname</label>
          <input
            required
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Student Number</label>
          <input
            required
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSIS">BSIS</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Course Description</label>
          <input
            required
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Year Level</label>
          <select
            name="yearLevel"
            value={formData.yearLevel}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;