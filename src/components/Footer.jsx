export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-status">
        <span className="pulse-dot" />
        status: operational · uptime: 100% · latency: sub-ms
      </div>
      <p>
        © {new Date().getFullYear()} Manish Kumar · Backend · Distributed Systems · AI
      </p>
    </footer>
  );
}