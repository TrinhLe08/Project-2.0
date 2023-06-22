import { Link } from 'react-router-dom'

export default function NotFoud(){
    return(
        <Link to='/NotFoud' target = '_blank'>
        <div >
           <a  href="/Project-2.0" className='Back' >↚  Back</a>
            <h1 style = {{textAlign : 'center'}}> 404 (Not Found) </h1>
        </div>
        </Link>
    )
}