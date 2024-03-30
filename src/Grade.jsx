function Grade({grades, student}) {
  const average = grades.reduce((sum, {sub, score}) => sum + score, 0)/grades.length;
  const { firstName, lastName } = student

  return (
    <>
      <span className="student-average">Average: {average}</span>
      {grades.map(({subject, score}) => (
        <li className="subject-grade" key={firstName+subject}>{subject}: {score}</li>
      ))}
    </>
  )
}

export default Grade
  