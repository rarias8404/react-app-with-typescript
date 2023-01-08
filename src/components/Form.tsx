import useNewSubForm from '../hooks/useNewFormSub'
import { Sub } from '../types'

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  const { formState: inputValues, changeForm, clearForm } = useNewSubForm()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    clearForm()
  }

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target
    changeForm(name, value)
  }

  const handleClear = () => {
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          onChange={handleChange}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          value={inputValues.subMonths}
          onChange={handleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          value={inputValues.avatar}
          onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button type="button" onClick={handleClear}>
          Clear the form
        </button>
        <button type="submit">Save new sub</button>
      </form>
    </div>
  )
}

export default Form
