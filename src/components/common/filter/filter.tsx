import { FC, useState } from "react"

import { IFilterItem, ICheckboxData } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import {
  selectBrand,
  selectCategory,
  deselectBrand,
  deselectCategory
} from "@/redux/filter"
import { Checkbox } from "@/components/ui"

interface IFilter {
  type: string
  data: IFilterItem[]
  filters: string[]
}

interface IFilterISItem {
  _id: string
  value: boolean
}

interface IFilterIS {
  [key: string]: IFilterISItem
}

const s = {
  container: `mb-8`,
  header: `font-medium capitalize mb-2`
}

const Filter: FC<IFilter> = ({ type, data, filters }) => {
  const initialState: IFilterIS = {}

  const [isChecked, setIsChecked] = useState(initialState)

  const dispatch = useAppDispatch()

  data.forEach(({ _id, name }) => {
    if (!initialState[name]) {
      initialState[name] = {
        _id,
        value: false
      }
    }

    if (filters.includes(_id)) {
      initialState[name].value = true
    }
  })

  const handleChange = ({ name, value }: ICheckboxData) => {
    switch (type) {
      case "brand":
        isChecked[name].value
          ? dispatch(deselectBrand(isChecked[name]._id))
          : dispatch(selectBrand(isChecked[name]._id))
        break

      case "category":
        isChecked[name].value
          ? dispatch(deselectCategory(isChecked[name]._id))
          : dispatch(selectCategory(isChecked[name]._id))
        break

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
    <div className={s.container}>
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
