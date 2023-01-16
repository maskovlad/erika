import { FaRegCopyright } from 'react-icons/fa'
import logoSviySite from './logo_sviy_site.svg'

const Copyright = ({ background, color, company }) => {

  const currentYear = new Date()

  return (
    <section style={{
      background,
      color,
      width: "100%",
      textAlign: "center",
      padding: "1rem 0",
      borderTop: `${color} 1px solid`,
    }}>

      <div>
        <FaRegCopyright color={color} />
        {' '}{company}{' '}{currentYear.getFullYear()}
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        marginTop: "0.5rem",
      }}>
        <a href="https://www.sviy.site">
          <img src={logoSviySite.src} width='100px' alt="Sviy.Site Logo Company" />
        </a>
        {' '}Дизайн та розробка
      </div>

    </section>
  )
}

export default Copyright

