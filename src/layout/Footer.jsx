function Footer() {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDay(),
    date.getFullYear(),
  ]
  return <footer className="page-footer">
  <div className="footer-copyright">
    <div className="container">
    {/* © {new Date().getFullYear()} Copyright Text */}
    © {month}/{day}/{year} Copyright Text
    <a className="grey-text text-lighten-4 right" href="!#">More Links</a>
    </div>
  </div>
</footer>
}
export {Footer}