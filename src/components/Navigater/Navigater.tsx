import './Navigater.css'

export default function Navigater() {
  const links = [
    {
      title: 'React',
      bgColor: '#087ea4',
    },
    {
      title: 'to Vue',
      bgColor: '#42b883',
    },
    {
      title: 'to Html',
      bgColor: '#dd4b25',
    },
  ]
  return (
    <>
      <div className="navigater_container">
        <span>Build with</span>
        {
          links.map(({ title, bgColor }) => (
            <span key={title} className={title === 'React' ? 'active' : 'item'}>
              {title}
              <span className="line" style={{ background: bgColor }} />
            </span>
          ))
        }
      </div>
    </>
  )
}
