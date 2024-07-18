/* eslint-disable */
import "./portfolioList.scss";

export default function PortfolioWork({title, active,setSelected,id}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}
