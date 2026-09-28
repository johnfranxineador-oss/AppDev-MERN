function IdentityCard({ student }) {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow-md p-4 m-2 text-left">
      <h2 className="text-xl font-bold mb-1">Fullname: {student.fullname}</h2>
      <p className="text-gray-700"><strong>Student Number:</strong> {student.studentNumber}</p>
      <p className="text-gray-700"><strong>Course:</strong> {student.course}</p>
      <p className="text-gray-700"><strong>Course Description:</strong> {student.courseDescription}</p>
      <p className="text-gray-700"><strong>Year Level:</strong> {student.yearLevel}</p>
      <p className="text-gray-700"><strong>Sex:</strong> {student.sex}</p>
    </div>
  );
}

export default IdentityCard;