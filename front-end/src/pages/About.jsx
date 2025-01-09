import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

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
           <b className=''>Our Mission</b>
        </div>
      </div>
      
    </div>
  )
}

export default About
