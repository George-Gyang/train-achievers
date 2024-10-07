import React, { useContext } from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { navItems } from "../utils/constant";
import { ResourceContext } from "../context/ResourceContext";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export function MobileNav() {
    const { activeNav } = useContext(ResourceContext)
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <div>
                <Button className="px-3 py-2 md:p-3 bg-white/90 border shadow-none border-black text-black/90 hover:bg-purple-500 hover:text-white flex items-center custom_btn" onClick={openDrawer}>
                    MENU<FiMenu className="ml-2" size={20} />
                </Button>
                <Drawer placement="right" overlay={false} open={open} onClose={closeDrawer} className=" p-4 opacity_half">
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h6" color="blue-gray">
                            <Link to={"/"} className='nav-link text-center'>
                                <h5 ><span className="primary_color">TRAIN</span><span className="secondary_color">ACHIEVERS</span></h5>
                            </Link>
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    <ul className=' mb-2 no_list '>
                        {
                            navItems.map((each, i) => {
                                const activeLink = activeNav == each.link
                                return (
                                    <li key={i} className={`me-4 hover_primary_color font-medium text-nowrap p-1 px-2 ${activeLink ? "border-b-2 border-purple-500 border-2 rounded-full" : ""}`}> <a className=' text-lg' href={each.route}>{each.link}</a> </li>
                                )
                            })
                        }
                        {/* <NavDropdown /> */}
                    </ul>
                    <div className="flex mt-4">
                        <Button className="custom_btn py-3 secondary_bg text-white/90" size="sm" variant="outlined">
                            Contact us
                        </Button>
                    </div>
                </Drawer>
            </div>
        </>
    );
}