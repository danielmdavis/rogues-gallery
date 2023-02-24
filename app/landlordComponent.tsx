import './page.module.css'

interface LandlordProps {
  name?: string
  properties?: object[]
}

export default function Landlord(props: LandlordProps) {
  return (
    <a>
      <div style={{ border: '4px solid lime', width: '400px', margin: '10px', padding: '6px', backgroundColor: 'lightskyblue' }}>
        <h1 style={{ color: 'darkBlue', textDecoration: 'none' }}>{props.name}</h1>

      </div>
    </a>
  )
}
