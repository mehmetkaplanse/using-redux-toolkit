import { useSelector, useDispatch } from "react-redux"
import { setDarkMode, setLanguage } from "../stores/site"

function Header() {

    const dispatch = useDispatch()
    const {dark, language} = useSelector(state => state.site)
    const languages = ['tr','en'] 

    const handleLanguage = (lang) => {
      dispatch(setLanguage(lang))
    }

    const handleDarkMode = () => {

    }

    return (
      <div>
          footer
          <div>
            {languages.map((lang,i) => (
              <button onClick={() => handleLanguage(lang)} className={lang === language ?'active':''} key={i}>{lang}</button>
            ))}
          </div>
          <div>
              <button onClick={() => dispatch(setDarkMode())}>
                {dark ? 'Light moda geç.': 'Dark moda geç'}
              </button>
          </div>
      </div>
    )
}

export default Header