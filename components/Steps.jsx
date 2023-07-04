"use client";

import MoneyBox from "./MoneyBox"
import steps from "@styles/steps.module.css"

import data from "@store/gameConfig.json"


const Steps = () => {

  const toggleSideBar = () => {
    const openButton = document.querySelector(`.${steps.button}`);
    const container = document.querySelector(`.${steps.container}`);
    const items = document.querySelector(`.${steps.items}`);
    openButton.classList.toggle(steps.open);
    container.classList.toggle(steps.open);
    items.classList.toggle(steps.open);
  }
  


  return (
    <div className={steps.container}>
      <span className={steps.button} onClick={() => toggleSideBar()}></span>

      <div className={steps.items}>
        {data.questions.map((item, index) => (
          <MoneyBox text={item.prize} id={index}/>
        ))}
      </div>
    </div>
  )
}

export default Steps




{/* <MoneyBox text={"$1,000,000"} />
<MoneyBox text={"$500,000"} />
<MoneyBox text={"$250,000"} />
<MoneyBox text={"$125,000"} />
<MoneyBox text={"$64,000"} />
<MoneyBox text={"$32,000"} />
<MoneyBox text={"$16,000"} />
<MoneyBox text={"$8,000"} />
<MoneyBox text={"$4,000"} />
<MoneyBox text={"$2,000"} />
<MoneyBox text={"$1,000"} />
<MoneyBox text={"$500"} /> */}