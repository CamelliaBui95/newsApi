import Link from "next/link";

const SideBar = ({ label, items }) => {
    return (
      <div className="sidebar">
        <Link href={ label.path } style={{textDecoration: "none"}}><h2 className="text-primary">{label.label}</h2></Link>
        <ul className="items scroll">
          {items.map((item) => (
              <li key={item.id}>
                  {item.payload}
            </li>
          ))}
        </ul>
      </div>
    );
}
 
export default SideBar;