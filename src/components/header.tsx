import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar
} from "@nextui-org/react";
import SearchMovie from "@/components/searchMovie";
import Link from "next/link";

import {BiCameraMovie} from "react-icons/bi";

const Header = () => {
    return (
        <Navbar isBordered maxWidth={"2xl"}>


            <Link href="/">
                <NavbarBrand className="mr-4">
            <span className="text-2xl">
              <BiCameraMovie />
            </span>
                    <p className="hidden sm:block font-bold text-inherit"> Libelula</p>
                </NavbarBrand>
            </Link>


            <NavbarContent as="div" className="items-center" justify="center">

                <SearchMovie/>

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Libelula"
                            size="sm"
                            src="/img/profile2.png"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </NavbarContent>

        </Navbar>
    );
};

export default Header;