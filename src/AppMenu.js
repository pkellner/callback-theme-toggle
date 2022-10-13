export default function AppMenu({toggleTheme}) {
  
  console.log("AppMenu");

  return (
    <header className="d-flex justify-content-center py-3">
      <div className="container">
        <ul className="nav nav-pills gap-1 align-items-center justify-content-start">
          <li>
            <input
              type="checkbox"
              className="themeToggleCheckbox"
              autoComplete="off"
              id="themeToggle"
              defaultChecked={false}
              onClick={() => {
                toggleTheme();
              }}
            />
            <label htmlFor="themeToggle" className="themeToggleCheckbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </li>
        </ul>
      </div>
    </header>
  );
}
