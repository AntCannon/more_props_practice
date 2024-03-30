# Instructions

1. pass the students array down as props to the `StudentsList` component
2. Have your `StudentsList` component return a `ul` with a mapped over array in it, where you pass each `StudentListItem` the props for `firstName`, `lastName`, and `grades`
3. Have each `StudentListItem` return an `li`, with the information from the props firstName, lastName and another mapped over `ul` that returns a `Grade` component with the props for `subject` and `score`
4. Each `Grade` component should return an `li` with the information from the subject and score props
5. Make it look good!