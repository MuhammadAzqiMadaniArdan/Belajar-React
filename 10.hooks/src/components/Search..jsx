import { memo } from "react"

const Search = (props) => {
    const {onChange} = props
    console.log('render Search')
    return (
        <input type="text" placeholder="Cari User..." onChange={(e) => onChange(e.target.value)}/>
    )
}

export default memo(Search)