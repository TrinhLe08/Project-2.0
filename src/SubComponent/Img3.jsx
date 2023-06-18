
// {
//     img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
//     p: 'It looks great and its somewhat futuristics cant wait to use it on a project here in nigeria i am sure it would put me ahead.. I cant wait to hv enough money to buy ur product.',
//     name: 'Mr. Bones',
//     job: 'WEB DESIGNER',
//     star: FaStar
// }

export default function Img3({Slide}){
    const Star = Slide.star
    return(
        <div className="slide">
             <img src={Slide.img} alt="" className="imgBoss" />
             <p className="p">{Slide.p}</p>
             <h2 className="h2">{Slide.name}</h2 >
             <h3 className='h3'>{Slide.job}</h3>
             <Star className = 'star'/>
             <Star className = 'star'/>
             <Star className = 'star'/>
             <Star className = 'star'/>
             <Star className = 'star'/>                                                                                            
        </div>
    )
}