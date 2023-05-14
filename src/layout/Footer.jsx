function Footer() {
  const date = new Date();
  const [year] = [
    date.getFullYear(),
  ]
  return <footer className="page-footer">
  <div className="footer-copyright">
    <div className="container">
    {/* © {new Date().getFullYear()} Copyright Text */}
    ©{year} Copyright Text
    <a className="grey-text text-lighten-4 right" target='_blank' rel="noreferrer" href="https://github.com/stavbers">GitHub</a>
    </div>
  </div>
</footer>
}
export {Footer}