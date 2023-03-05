import { title } from "../interfaces/Title"

export default function Title(props: title) {
  return (
    <h1>{props.name}</h1>
  )
}
