import { FC, useEffect, useState } from "react"

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
  marginTop?: number
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

const Filter: FC<IFilter> = ({ type, data, filters, marginTop }) => {
  const [isChecked, setIsChecked] = useState<IFilterIS>({})

  const dispatch = useAppDispatch()

  useEffect(() => {
    const initialState: IFilterIS = {}

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

    setIsChecked(initialState)
  }, [data, filters])

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
    <div style={{ marginTop }}>
      <h5 className={s.header}>{type}</h5>
      <ul>
        {data.map(({ name }) => (
          <li key={name}>
            <Checkbox
              name={name}
              isChecked={isChecked[name]?.value}
              onCheck={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
