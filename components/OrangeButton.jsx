import Link from "next/link"
import button from "@styles/orangeButton.module.css"

const OrangeButton = ({text, href, action}) => {
  return (
    <Link href={href} onClick={action} className={button.orangeButton}>{text}</Link>
  )
}

export default OrangeButton