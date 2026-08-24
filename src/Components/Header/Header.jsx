import { useEffect, useState } from "react";
import { Bell, ChevronDown, Search, User } from "lucide-react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

const [isScrolled, setIsScrolled]= useState(false);

useEffect(()=>{
    const handleScroll = ()=>{
        if(window.scrollY > 50){setIsScrolled(true)}
        else{setIsScrolled(false)}
    }

    window.addEventListener('scroll', handleScroll);

    return()=>window.removeEventListener('scroll',handleScroll)
},[])


  return (
    <header className={`${styles.header} ${isScrolled? styles.scrolled: ""}`}>
      <div className={styles.container}>
        {/* logo */}

        <img className={styles.logo} src={logo} />

        {/* navigation links */}

        <nav className={styles.nav}>
          <Link className={styles.navLink} to="">
            Home
          </Link>
          <Link className={styles.navLink} to="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="">
            Movies
          </Link>
          <Link className={styles.navLink} to="">
            New and popular
          </Link>
          <Link className={styles.navLink} to="">
            My List
          </Link>
          <Link className={styles.navLink} to="">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}

        <div className={styles.rightSection}>
          {/* Search */}
          <div className={styles.searchContainer}>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
            <button
              className={styles.searchButton}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {/* search icon */}
              <Search size={20} />
            </button>
          </div>

          {/* Notification */}

          <button className={styles.iconButton}>
            {/* notification icon */}
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}

          <div className={styles.profileContainer}>
            <button
              className={styles.profileButton}
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
              }}
            >
              {/* profile icon */}
              <div className={styles.profileAvator}>
                <User size={20} />
              </div>

              {/* dropdown icon */}
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>Help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
