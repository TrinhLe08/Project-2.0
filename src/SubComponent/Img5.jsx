// {
//     link: 'https://twitter.com/intent/tweet?text=Now%20UI%20Kit%20Pro%20React%20by%20Creative%20Tim&url=http%3A%2F%2Fdemos.creative-tim.com%2Fnow-ui-kit-pro-react&via=CreativeTim',
//     icon: FaTwitterSquare
// }


export default function Img5({Icon}){
    const IconVip = Icon.icon
    return(
          <a href={Icon.link}>
            <IconVip className = 'subIcon'/>
          </a>
    )
}