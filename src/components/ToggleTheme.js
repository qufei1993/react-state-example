import { useTheme } from '../contexts/ThemeContext'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return <div style={{
    backgroundColor: theme.background,
    color: theme.color,
    width: '100%',
    height: '100vh',
    textAlign: 'center',
  }}>
    <h2 className="theme-title"> Toggling Light/Dark Theme </h2>
    <p className="theme-desc"> Toggling Light/Dark Theme in React with useState and useContext </p>
    <button className="theme-btn" onClick={toggleTheme}>
      Switch to { theme.type } mode
    </button>
  </div>
}

export default ToggleTheme;
