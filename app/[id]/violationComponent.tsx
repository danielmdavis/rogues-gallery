import Link from 'next/link'
import './../page.module.css'

interface ViolationProps {
  description: string
}

export default function Violation(props: ViolationProps) {
  return (
    <div className='violation'>
      <div>{props.description}</div>
    </div>
  )
}
