import './Navigater.css'

interface Links {
  title: string
  url: string
  className: string
}

export default function Navigater() {
  const links: Links[] = [
    {
      title: 'React',
      url: '',
      className: 'active',
    },
    {
      title: 'to Vue',
      url: 'https://huberyyang.site:85/',
      className: 'vue item',
    },
    {
      title: 'to Html',
      url: 'https://huberyyang.site/',
      className: 'html item',
    },
  ]

  function onNavigate(url: string) {
    if (!url)
      return false
    window.open(url, '_self')
  }
  return (
    <>
      <div className="navigater_container">
        <span>Build with</span>
        {
          links.map(({ title, url, className }) => (
            <span key={title} className={className} onClick={() => onNavigate(url)}>
              {title}
              <span className="line" />
            </span>
          ))
        }
      </div>
    </>
  )
}
