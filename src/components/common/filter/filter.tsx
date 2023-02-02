import { FC, useState } from "react"

import { ICategory, ICheckboxData } from "@/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectCategory,
  deselectCategory,
  getFilteredCategories
} from "@/redux/filter"
import { Checkbox } from "@/components/ui"

interface IFilter {
  data: ICategory[]
  type: string
}

interface IFilterISItem {
  _id: string
  value: boolean
}

interface IFilterIS {
  [key: string]: IFilterISItem
}

const s = {
  header: `font-medium capitalize mb-2`
}

const Filter: FC<IFilter> = ({ data, type }) => {
  const initialState: IFilterIS = {}

  const [isChecked, setIsChecked] = useState(initialState)

  const filteredCategories = useAppSelector(getFilteredCategories)

  const dispatch = useAppDispatch()

  data.forEach(({ _id, name }) => {
    if (!initialState[name]) {
      initialState[name] = {
        _id,
        value: false
      }
    }

    if (filteredCategories.includes(_id)) {
      initialState[name].value = true
    }
  })

  const handleChange = ({ name, value }: ICheckboxData) => {
    switch (type) {
      case "category":
        isChecked[name].value
          ? dispatch(deselectCategory(isChecked[name]._id))
          : dispatch(selectCategory(isChecked[name]._id))

      default:
        break
    }

    setIsChecked((prevState) => ({
      ...prevState,
      [name]: {
        _id: prevState[name]._id,
        value
      }
    }))
  }

  return (
    <div>
      <h5 className={s.header}>{type}</h5>
      <ul>
        {data.map(({ name }) => (
          <li key={name}>
            <Checkbox
              name={name}
              isChecked={isChecked[name].value}
              onCheck={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
