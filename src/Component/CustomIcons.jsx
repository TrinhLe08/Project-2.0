import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

export default function Vip9(){

    const Vip = useContext(VipContext)
    

    return(
        <div className="Vip9">
            <div className="divBoss">
                <h1 className="h1"> {!Vip.vietSub ? 'Biểu Tượng Tùy Chỉnh' : 'Custom Icons'}</h1>
                <p className="p"> {!Vip.vietSub ? 'Giờ đây, UI Kit PRO đi kèm với 100 biểu tượng demo tùy chỉnh do bạn bè của chúng tôi tạo từ NucleoApp. Gói chính thức chứa hơn 20.729 biểu tượng trông tuyệt vời khi kết hợp với Now UI Kit PRO. Hãy chắc chắn rằng bạn kiểm tra tất cả chúng và sử dụng những thứ bạn thích nhất.' : ' Now UI Kit PRO comes with 100 custom demo icons made by our friends from NucleoApp. The official package contains over 20.729 icons which are looking great in combination with Now UI Kit PRO. Make sure you check all of them and use those that you like the most.'}</p>
                <div className="div">
                       <button className="button1"><a href="https://demos.creative-tim.com/now-ui-kit-pro-react/?_ga=2.153601784.17007463.1686208460-1823786368.1685957193#/nucleo-icons">{!Vip.vietSub ? 'Xem các biểu tượng demo' : 'View Demo Icons'}</a></button>
                       <button className="button2"><a href="https://nucleoapp.com/?ref=1712">{!Vip.vietSub ? 'Xem các biểu tượng demo' : 'View All Icons'}</a></button>
                </div>
            </div>
        </div>
    )
}