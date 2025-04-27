import { useState } from 'react'
import Footer from '~/components/Footer'
import './App.css'

interface CompItem {
  title: string
}

export default function App() {
  let timer: any
  const userInfo = {
    name: 'Hubery Yang',
    desc: '👋 Hi, 我是 "Hubery Yang"',
    post: '👨‍💻 前端开发者 | Vue & Nuxt & Js & Python',
    hobby: '🚀 脚本编写, 网站开发',
    script: '💓 拍摄 | 剪辑 | 阅读 | 羽毛球',
    mail: '18830279823@163.com',
    phone: '15932130680',
  }
  const iconComponents: CompItem[] = [
    {
      title: 'github',
    },
    {
      title: 'X',
    },
    {
      title: 'bilibili',
    },
    {
      title: 'youtube',
    },
  ]

  function onNavigate(link: number) {
    let url = ''
    switch (link) {
      case 0:
        url = 'https://github.com/Hub-yang'
        break
      case 1:
        url = 'https://twitter.com/mochenghualei'
        break
      case 2:
        url = 'https://space.bilibili.com/278851804'
        break
      case 3:
        url = 'https://www.youtube.com/@HuberyYang'
        break
    }
    window.open(url, '_blank')
  }

  const imgList = Array.from({ length: 4 }, (_, idx) => {
    return (
      <span key={`${idx}`} className={`circle circle${idx + 1}`}>
        {idx === 4 && <img className="avatar" src="/avatar.webp" alt="" />}
      </span>
    )
  })

  const [tootipShow, setTootipShow] = useState(false)

  async function onCopyClick(type: string) {
    try {
      await navigator.clipboard.writeText((userInfo as AnyKey)[type])
      setTootipShow(true)
      clearTimeout(timer)
      timer = setTimeout(() => setTootipShow(false), 2000)
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (_err) {
      throw new Error('copy mail error')
    }
  }
  return (
    <>
      <div className="tootip" style={tootipShow ? { top: '10px' } : { top: '-50px' }}>
        拷贝成功
      </div>
      <div className="content">
        <div className="info_card">
          <div className="card">
            <div className="glass">
              <div className="title">
                {userInfo.name}
              </div>
              <div id="intro">
                <div>{userInfo.desc}</div>
                <div>{userInfo.post}</div>
                <div>{userInfo.hobby}</div>
                <div>{userInfo.script}</div>
                <div className="connection">
                  与我联系
                </div>
                <div>
                  📧 [
                  <span className="mail" onClick={() => onCopyClick('mail')}>{userInfo.mail}</span>
                  ]
                </div>
                <div>
                  📱 [
                  <span className="mail" onClick={() => onCopyClick('phone')}>{userInfo.phone}</span>
                  ]
                </div>
              </div>
            </div>

            <div className="logo">
              {imgList}
            </div>

            <div className="bottom">
              <div className="social-buttons-container">
                {
                  iconComponents.map(({ title }, idx) => {
                    return (
                      <button key={title} onClick={() => onNavigate(Number(idx))}>
                        <img src={`./assets/icon${idx + 1}.svg`} alt="" />
                      </button>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
