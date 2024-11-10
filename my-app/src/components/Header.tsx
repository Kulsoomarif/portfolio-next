import Link from "next/link";
const Header = () => {
    return(
       <>
<div>
    
        <ul className="navlist">
            <li><Link  href="/" className="active">Home</Link></li>
               <li><Link  href="/about" className="active">About</Link></li>
               <li><Link  href="/projects" className="active">Projects </Link></li>
               <li><Link href="/contact" className="active">Contact </Link></li>
            
        </ul>
</div>


       </>
    )
}
export default Header;