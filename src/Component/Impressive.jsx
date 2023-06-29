import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img1 from '../SubComponent/Img1'


export default function Vip2(){
 

    const Vip = useContext(VipContext)

 

    return(
        <div className="Vip2">
       <h1 className="h2"> {!Vip.vietSub ? 'Bộ sưu tập các thẻ ấn tượng' : 'Impressive collection of elements '}</h1>
       <p className="p1"> {!Vip.vietSub ? 'Được thiết kế để trông tuyệt đẹp cùng nhau' : 'Designed to look gorgeous together'}</p>
       <p className="p2"> {!Vip.vietSub ? 'Giờ đây, UI Kit Pro đi kèm với một số lượng lớn các yếu tố có thể tùy chỉnh. Chúng không chỉ được thiết kế pixel hoàn hảo và nhẹ nhàng mà còn dễ sử dụng và kết hợp tốt với các thành phần khác.' : 'Now UI Kit Pro comes with a huge number of customisable elements.  They are not only designed to be pixel perfect and light but they are also easy to  use and combine well with other components.'}</p>
       
      

        <div className="img">
        {
            Vip.Vip2.map((img,index) => (
                <Img1 index = {index} Img = {img} key = {index}/>
            ))
        }
        </div>

       </div>
       

        
    )
}