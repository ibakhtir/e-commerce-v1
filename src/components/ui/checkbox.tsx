import { FC } from "react"

import { ICheckboxData, ITarget } from "@/types"

interface ICheckbox {
  name: string
  isChecked: boolean
  onCheck: (target: ICheckboxData) => void
}

const s = {
  container: `flex items-center`,
  input: `w-4 h-4 cursor-pointer`,
  label: `text-sm leading-7 ml-2`
}

const Checkbox: FC<ICheckbox> = ({ name, isChecked, onCheck }) => {
  const handleChange = ({ target }: ITarget) => {
    onCheck({
      name: target.name,
      value: target.checked
    })
  }

  return (
    <div className={s.container}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        className={s.input}
        onChange={handleChange}
      />
      <label htmlFor={name} className={s.label}>
        {name}
      </label>
    </div>
  )
}

export default Checkbox
