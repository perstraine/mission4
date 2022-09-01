import './Results.css'

export default function Results({ address, name, snippet, index }) {
  return (
    <>
      <div
        className="RScontainer"
        style={
          index % 2 === 0 ? { background: "#ffffff" } : { background: "#d9d9d9" }
        }
      >
        <div className="RSinner-container">
          <a className="RSlink" href={address}>
            <h3 className="RSheading">{name}</h3>
          </a>
          <p className="RSurl-link">{address}</p>
          <p className="RSsnippet">{snippet}</p>
        </div>
      </div>
    </>
  );
}
