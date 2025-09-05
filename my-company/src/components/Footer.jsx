function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "15px",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
