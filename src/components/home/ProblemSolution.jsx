import React from 'react'
import { Container } from '../common'
import { ProblemSolutionHeader } from './ProblemSolutionHeader'
import { ProblemSolutionCard } from './ProblemSolutionCard'
import { problemSolutions } from '../../lib/db'

export const ProblemSolution = () => {
  return (
    <>
    <section className='pt-32'>
        <Container>
            <ProblemSolutionHeader/>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 lg:gap-[30px]'>
                {
                    problemSolutions.map((card,i)=>(
                        <ProblemSolutionCard key={i} {...card} />
                    ))
                }
            </div>
        </Container>
    </section>
    </>
  )
}
