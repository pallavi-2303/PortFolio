import GlowCard from '@/components/glow-card'
import TitleHeader from '@/components/title-header'
import {  bottomRow, topRow } from '@/constants'
import React from 'react'

const Achievement = () => {
  return (
   <section className='px-10 py-12  text-white section-padding' id="achievements">
   <TitleHeader title="Achievements" sub="🏆 Highlights of My Journey" />
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 lg:px-8">
        {topRow.map((card, index) => (
          <GlowCard key={index} card={card} index={index}>
            <div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm md:text-lg">{card.description}</p>
            </div>
          </GlowCard>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 mt-6 lg:px-24">
        {bottomRow.map((card, index) => (
          <GlowCard key={index + 3} card={card} index={index + 3}>
            <div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm md:text-lg">{card.description}</p>
            </div>
          </GlowCard>
        ))}
      </div> 
   </section>
  )
}

export default Achievement