import type { ChangeEvent } from 'react'
import type { TFilter } from '../model'
import styles from './FilterButton.module.css'

interface IFilterButtonProps {
  buttonTitle: string
  buttonValue: TFilter
  filter: TFilter
  onChangeFilterValue: (e: ChangeEvent<HTMLInputElement, Element>) => void
}

export const FilterButton = ({ buttonTitle, buttonValue, filter, onChangeFilterValue }: IFilterButtonProps) => {
  return (
    <label className={styles.radioLabel}>
      <input type="radio" name="filter" value={buttonValue} checked={filter === buttonValue} onChange={onChangeFilterValue} className={styles.radioInput} />
      <span>{buttonTitle}</span>
    </label>
  )
}