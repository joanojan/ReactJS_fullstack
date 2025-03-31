import Part from "./Part"

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </ul>
    </div>
  )
}

export default Course