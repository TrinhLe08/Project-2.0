
import { FaStar } from 'react-icons/fa';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineEuroCircle } from 'react-icons/ai';
import { DiBootstrap } from 'react-icons/di';
import { AiFillFileExcel } from 'react-icons/ai';


import { useContext, createContext } from "react"

const VipContext = createContext()

function ThemeContext({children}) {
    const Vip2 = [
        {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/basic_thumb.b6b142c0.jpg'
        },  {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/cards_thumb.e670ed86.jpg'
        }, {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/sections_thumb.3df6196f.jpg'
        }, {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pages2_thumb.36ba89d8.jpg'
        }
    ]

    const Vip3 = [
        {
            img : 'data:image/jpeg;base64,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'
        },  {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/coloured-card.2cb57fb9.jpg'
        }, {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/coloured-card-with-btn.da577827.jpg'
        }, {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/table.33c41428.jpg'
        }, {
            img : 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/social-row.66f614e5.jpg'
        }, {
            img : 'data:image/jpeg;base64,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'
        }
    ]

    const Vip4 = [
        {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card3.69397bff.jpg'
        },{
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card6.7a4e6369.jpg'
        },{
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card7.e514ccd5.jpg'
        },{
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card5.e5d26881.jpg'
        },{
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/card4.eabf51ad.jpg'
        }
    ]

    const Vip5 = [
        {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/content1.2c741ecf.jpg'
        },{
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/content4.3ab39679.jpg'
        }
    ]

    var Vip6 = [
        {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/header1.bf3dc89e.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/header2.f719ba94.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/header3.d79b8f44.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/header4.ea4a4670.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features1.4581706e.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features2.7477d2b9.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features3.42622271.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features4.778676e4.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features5.3441fe0a.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features6.991af0f8.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features7.b26e2bec.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features8.8c5333de.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/blogpost1.9223a9a0.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/blogpost2.350c9efe.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/blogpost3.6c96fa8b.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/blogpost4.f5e55499.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/blogpost5.6c57bdaa.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/team1.6803eb72.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features3.42622271.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/contact1.77bbf215.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/testimonials3.0125500a.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/contact2.cd4da374.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/team2.7f86daaf.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/features1.4581706e.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/team4.61bdd3f7.jpg   '
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/team5.5e678b25.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/projects1.74c78372.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/projects2.e65b4ea3.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/projects4.d83a444d.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/projects5.efcab3e4.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pricing1.214ce3b7.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/blogpost5.6c57bdaa.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pricing3.a7024b08.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pricing4.ea95f54a.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pricing5.e5b522d0.jpg'
        },  {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/testimonials1.e9b268da.jpg'
        }
    ]
    
    const Vip7 = [
        {
            name: 'About Us',
            routing: 'AboutUs',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/about-us.a4c246fa.jpg',
            id: 0
        },   {
            name: 'Pricing Page',
            routing: 'PricingPage',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pricing.fa9a30ec.jpg',
            id: 1
        },   {
            name: 'Landing Page',
            routing: 'LandingPage',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/landing.b239f3d9.jpg',
            id: 2
        },   {
            name: 'Product Page',
            routing: 'ProductPage',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/product.e137b008.jpg',
            id: 3
        },   {
            name: 'Ecommerce',
            routing: 'Ecommerce',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/ecommerce.41b02ef3.jpg',
            id: 4
        },   {
            name: 'Product Page',
            routing: 'ProductPage2',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/login.f8b38322.jpg',
            id: 5
        },   {
            name: 'Signup Page',
            routing: 'SignupPage',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/signup.0c256f66.jpg',
            id: 7
        },   {
            name: 'Profile Page',
            routing: 'ProfilePage',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/profile.1dd13a49.jpg',
            id: 8
        },   {
            name: 'Contact Us',
            routing: 'ContactUs',
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/contact.719b2b4d.jpg',
            id: 9
        }
    ]

    const Vip8 =[
        {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/project1.728253f2.jpg',
            name: 'Free Demo',
            span: [
                60,3,'☓','☓','☓'
            ],
            p: [
                'Components','Example Pages','Beautiful Cards',' Sections',' Premium Support'
            ]
        },
        {
            img: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/pricing1.78530ce2.jpg',
            name: 'PRO Version',
            span: [
                '1000+',10,'√','√','√'
            ],
            p: [
                'Components','Example Pages','Beautiful Cards',' Sections',' Premium Support'
            ]
        }
    ]

    const Vip10 = [
        {
            icon: AiOutlineEuroCircle,
            h2: 'Save Time & Money',
            p: 'Creating your design from scratch with dedicated designers can be very expensive.Using Now UI Kit PRO you do not have to worry about customising the basic Bootstrap 4 design or its components.'

        },  {
            icon: DiBootstrap,
            h2: 'Bootstrap 4 & Flexbox',
            p: 'It is built over Bootstrap 4, it is fully responsive and has all the benefits of the flexbox for the layout, grid system and components. This is a huge advantage when you work with columns.'

        },  {
            icon: AiFillFileExcel,
            h2: 'Fast Prototype',
            p: 'Using Now UI Kit PRO you can create hundreds of components combinations within seconds and present them to your client. You just need to change some classes and colors.'

        }
    ]


    const Vip11Slide = [
        {
            img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            p: 'It looks great and its somewhat futuristics cant wait to use it on a project here in nigeria i am sure it would put me ahead.. I cant wait to hv enough money to buy ur product.',
            name: 'Mr. Bones',
            job: 'WEB DESIGNER',
            star: FaStar
        }, {
            img: 'https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048',
            p: 'Everything is perfect. Codes are really organized. It is easy to edit for my own purposes. It is great that it is built on top of Bootstrap 4.',
            name: 'DOĞA',
            job: 'WEB DEVELOPER',
            star: FaStar
        }, {
            img: 'https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024',
            p: 'Awesome Design and very well organized code structure! Also, it contains numerous elements using which achieving the perfect or required template can be done with ease. Great job!',
            name: 'Stefan',
            job: 'WEB DESIGNER',
            star: FaStar
        }
    ]

    const Vip11Sub = [
        {
            sub: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1577975819014-2d6f1e721e77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1593373986890-ea50b4dda788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1584518969469-c2d99c7760a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }, {
            sub: 'https://images.unsplash.com/photo-1552915170-9a8007c66041?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
    ]

    const Vip12Img = [
        {
            sub: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/vodafone.d02aad25.jpg'
        }, {
            sub: 'https://inkythuatso.com/uploads/images/2021/10/microsoft-logo-inkythuatso-01-29-10-05-20.jpg'
        }, {
            sub: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/harvard.b1754ba2.jpg'
        }, {
            sub: 'https://demos.creative-tim.com/now-ui-kit-pro-react/static/media/stanford.da4a97ee.jpg'
        }
    ]

    const Vip12Icon =[
        {
            link: 'https://twitter.com/intent/tweet?text=Now%20UI%20Kit%20Pro%20React%20by%20Creative%20Tim&url=http%3A%2F%2Fdemos.creative-tim.com%2Fnow-ui-kit-pro-react&via=CreativeTim',
            icon: FaTwitterSquare
        }, {
            link: 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdemos.creative-tim.com%2Fnow-ui-kit-pro-react&t=Now%20UI%20Kit%20Pro%20React%20by%20Creative%20Tim',
            icon : FaFacebookSquare
        }, {
            link : 'https://github.com/TrinhLe08/Project-2.0.git',
            icon :FaGithubSquare
        }
    ]
  const Value = {
    Vip2,
    Vip3,
    Vip4,
    Vip5,
    Vip6,
    Vip7,
    Vip8,
    Vip10,
    Vip11Slide,
    Vip11Sub,
    Vip12Img,
    Vip12Icon
  }

  return (
    <VipContext.Provider value = {Value}>
      {children}
    </VipContext.Provider>
  )
}

export { ThemeContext, VipContext };
