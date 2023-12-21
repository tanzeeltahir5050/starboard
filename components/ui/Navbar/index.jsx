import Link from "next/link"
import Brand from "../Brand"
import NavLink from "../NavLink"

const Navbar = () => (
    <header>
        <nav className="custom-screen py-3 flex items-center justify-between md:py-5">
            <div>
                <Link href="/"
                    className="flex justify-between items-center gap-4"
                >
                    <Brand />
                    <h2 className="font-medium text-lg"
                    >
                        IDSA
                    </h2>
                </Link>
            </div>
            <div>
                <NavLink href="/"
                    className="font-medium text-sm"
                >
                    Home
                </NavLink>
                <NavLink href="/"
                    className="font-medium text-sm"
                >
                    Membership
                </NavLink>
                <NavLink href="/"
                    className="font-medium text-sm"
                >
                    Symposium
                </NavLink>
                <NavLink href="/"
                    className="font-medium text-sm"
                >
                    IDSNY Intercity Rounds
                </NavLink>
                <NavLink
                    href="#get-started"
                    className="font-medium text-sm"
                >
                    More
                </NavLink>
            </div>
        </nav>
    </header>
)

export default Navbar