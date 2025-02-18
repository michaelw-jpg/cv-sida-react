export default function Footer() {
  function changeColor() {
    if (document.body.style.filter === "invert(1)") {
      document.body.style.filter = "invert(0)";
    } else {
      document.body.style.filter = "invert(1)";
    }
  }
  return (
    <>
      <footer>
        Made by Michael&nbsp;
        <button className="easter" onClick={changeColor}>
          W
        </button>
        ortel 2025
      </footer>
    </>
  );
}
