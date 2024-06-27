import { Link, usePage } from "@inertiajs/react";
import { BsGraphUp } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbHomeEdit, TbCategoryPlus } from "react-icons/tb";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export default function DashboardLayout({ children }) {
    const { user } = usePage().props.auth;
    return (
        <div className="min-h-screen pb-4">
            <div className="border-b navbar bg-secondary border-b-gray-300">
                <div className="flex-1">
                    <label
                        htmlFor="my-drawer"
                        className="text-white btn btn-ghost drawer-button"
                    >
                        <RxHamburgerMenu />
                    </label>
                    <a className="text-xl text-white btn btn-ghost">
                        Dashboard
                    </a>
                </div>
                <div className=" dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.image}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="z-50 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li className="btn btn-ghost">Hallo, {user.name}</li>
                        <li>
                            <Link
                                href={route("profile.edit")}
                                className="gap-1 "
                            >
                                <FaRegUser /> Profile
                            </Link>
                        </li>

                        <li>
                            <Link className="gap-1" href={route("home")}>
                                <FaHome />
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={route("logout")}
                                method="post"
                                className="gap-1"
                                as="button"
                            >
                                <MdOutlineLogout />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" drawer lg:drawer-open">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here */}

                    <main className="mx-4 mt-4">{children}</main>
                </div>
                <div className=" drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="w-56 min-h-full p-4 menu bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {/* <li>
                            <Link>
                                <BsGraphUp />
                                Analytics
                            </Link>
                        </li> */}
                        <li>
                            <Link href={route("admin.product.index")}>
                                <FaBox />
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href={route("admin.order")}>
                                <GoListUnordered />
                                Orders
                            </Link>
                        </li>
                        {/* <li>
                            <Link>
                                <TbHomeEdit />
                                Home Editor
                            </Link>
                        </li> */}
                        <li>
                            <Link href={route("admin.category.index")}>
                                <TbCategoryPlus />
                                Category Manager
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
