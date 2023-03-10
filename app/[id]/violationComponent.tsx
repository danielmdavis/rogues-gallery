import Link from 'next/link'
import './../page.module.css'

interface ViolationProps {
  date: string,
  description: string,
  status: string
}

export default function Violation(props: ViolationProps) {
  
  const year = props.date.substring(0,4)
  const month = props.date.substring(5,7)
  const day = props.date.substring(8,10)
  const date = `${month} ${day} ${year}`

  return (
    <div className='violation'>
      <div>
        {props.description} 
        <span style={{ fontSize: '0.75em' }}> [{date}] </span> 
        <span style={{ fontSize: '0.9em' }}> [{props.status}]</span>
        </div>
    </div>
  )
}
