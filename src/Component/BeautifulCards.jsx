import { ThemeContext, VipContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import Img1 from '../SubComponent/Img1'

export default function Vip4(){

    const Vip = useContext(VipContext)

    return(
        
        <div className="Vip4">

            <div className="div">
                <h1 className="h1">{!Vip.vietSub ? 'Các Thẻ' : 'Beautiful Cards'}</h1>
                <p className="p1"> {!Vip.vietSub ? 'MỘT THẺ CHO MỌI VẤN ĐỀ' : 'ONE CARD FOR EVERY PROBLEM'}</p>
                <p className="p2"> {!Vip.vietSub ? 'Từ thẻ được thiết kế cho các bài đăng trên blog, đến thẻ sản phẩm hoặc hồ sơ người dùng, bạn sẽ có nhiều tùy chọn để lựa chọn. Tất cả các thẻ đều tuân theo nguyên tắc phong cách Bộ công cụ giao diện người dùng hiện hành và có thiết kế nổi bật. Chúng tôi đã đi xa hơn với các tùy chọn để bạn sắp xếp thông tin của mình.' : 'From cards designed for blog posts, to product cards or user profiles,you will have many options to choose from. All the cards follow the Now UI Kit style principles and have a design that stands out. We have gone above and beyond with options  for you to organise your information.'} </p>
            </div>

              <div className="img">
                {
                     Vip.Vip4.map((img,index) => (
                         <Img1 index = {index} Img = {img} key = { index }/>
                     ))
                }
             </div>

        </div>
    )
}