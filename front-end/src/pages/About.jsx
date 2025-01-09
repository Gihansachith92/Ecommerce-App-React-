import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur earum sit tempore? Fugit eveniet nemo id quos nostrum harum expedita aliquid hic fugiat, ipsam iure exercitationem accusamus temporibus nihil magnam autem et voluptates ipsa!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut assumenda culpa eveniet veniam. Explicabo iusto voluptas nihil odio sunt perferendis doloremque quaerat mollitia facere nam sapiente dolorum obcaecati illo, molestias delectus cumque eos quae minima distinctio?</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur incidunt, magni qui nobis, amet, natus asperiores maiores harum atque quisquam ex quos hic. Repudiandae veniam fugit magni soluta consequuntur.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/> 
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className='border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus odio dicta quod dolor.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus odio dicta quod dolor .</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus odio dicta quod dolor .</p>
        </div>
      </div>
      
      <NewsletterBox/>

    </div>
  )
}

export default About
