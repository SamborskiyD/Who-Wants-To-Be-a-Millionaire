

import Image from "next/image"
import OrangeButton from "@components/OrangeButton"
import banner from "@styles/banner.module.css"


const Banner = ({titleText, buttonText, buttonLink, labelText, buttonAction}) => {
    return (
        <div className={banner.banner}>
            <Image className={banner.image} src={'/assets/images/hand-image.png'} width={452} height={356} alt="hand image" />

            <div className={banner.text}>
                <h2 className={banner.label}>{labelText}</h2>
                <h1 className={banner.title}>{titleText}</h1>
                <OrangeButton text={buttonText} href={buttonLink} action={buttonAction}/>
            </div>
        </div>
    )
}

export default Banner