import './Navigater.css'

export default function Navigater() {
  const links = [
    {
      title: 'React',
      url: '',
    },
    {
      title: 'to Vue',
      url: 'https://huberyyang.site:85/',
    },
    {
      title: 'to Html',
      url: 'https://huberyyang.site/',
    },
  ]
  function getItemClass(key: string): string {
    switch (key) {
      case 'React':
        return 'active'
      case 'to Vue':
        return 'vue item'
      case 'to Html':
        return 'html item'
      default:
        return ''
    }
  }

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
          links.map(({ title, url }) => (
            <span key={title} className={getItemClass(title)} onClick={() => onNavigate(url)}>
              {title}
              <span className="line" />
            </span>
          ))
        }
      </div>
    </>
  )
}
