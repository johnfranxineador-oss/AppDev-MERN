import IdentityCard from "../components/identityCard";

function StudentList({ students }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Lists!</h1>
      <div className="flex flex-wrap gap-4">
        {students && students.map((student, index) => (
          <IdentityCard key={student.id || index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;