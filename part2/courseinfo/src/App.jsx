import Course from './components/Course'

const App = ({ courses }) => {
  return (
    <div>
      <h1>Web develpoment curriculum</h1>
    <ul>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </ul>
    </div>
  )
}

export default App