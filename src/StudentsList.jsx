import StudentsListItem from './StudentsListItem.jsx';

function StudentsList({students}) {

  return (
    <ul className="student-cards">
      {students.map((student) => (
        <li className="student-card">
          <StudentsListItem student={student} key={student.firstName+student.lastName} />
        </li>
      ))}
    </ul>
  )
}
  
  export default StudentsList
  