

export default function Img5({Icon}){
    const IconVip = Icon.icon
    return(
          <a href={Icon.link}>
            <IconVip className = 'subIcon'/>
          </a>
    )
}