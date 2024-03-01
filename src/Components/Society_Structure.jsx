import React from 'react'
import Brief from './Structural_Components/Brief'
import Welcome_To from './Structural_Components/Welcome_To'
import Projects_Achievements from './Structural_Components/Projects_Achievements'
import Gallery from './Structural_Components/Gallery'
import Seniors from './Structural_Components/Seniors'
import Vision from './Structural_Components/Vision'
import Team from './Structural_Components/Team'

const Society_Structure = () => {
  return (
    <div>
    <Welcome_To/>
    <Vision/>
    <Brief/>
    <Projects_Achievements/>
    <Team/>
    <Gallery/>
    <Seniors/>
    </div>
  )
}

export default Society_Structure