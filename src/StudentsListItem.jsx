import Grade from './Grade.jsx';

function StudentsListItem({student}) {
  const { firstName, lastName, grades } = student

  return (
    <>
      <h3 className="student-name">{firstName} {lastName}</h3>
      <ul className="student-grades">
        <Grade grades={grades} student={student} key={firstName+"grades"} />
      </ul>
    </>
  )
}
  
export default StudentsListItem
  