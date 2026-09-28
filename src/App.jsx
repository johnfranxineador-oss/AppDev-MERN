import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import initialStudents from "./data/students.json";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";

function App() {
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, { ...newStudent, id: Date.now() }]);
  };

  return (
    <Router>
      {/* This renders the navigation bar at the top */}
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList students={students} />} />
        <Route path="/students" element={<StudentList students={students} />} />
        <Route path="/add-student" element={<AddStudent onAddStudent={handleAddStudent} />} />
      </Routes>
    </Router>
  );
}

export default App;