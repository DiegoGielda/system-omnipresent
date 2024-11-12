import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Account from "./assets/account_circle.svg";
import Info from "./assets/info.svg";
import Logout from "./assets/logout.svg";
import './styles.css';

const SidebarMenu = () => {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar-menu">
          <li>
            <a href="#" className="item__link-publication">Publicar</a>
          </li>
          <li>
            <a href="#" className="item__link item__link--active">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href='#' className="item__link">
              <img src={Account} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Info} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Logout} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SidebarMenu;