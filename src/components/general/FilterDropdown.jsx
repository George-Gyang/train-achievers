import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export default function FilterDropdown({ filter }) {
    return (
        <Menu>
            <MenuHandler>
                <p className="cursor-pointer">{filter[0].tag}</p>
            </MenuHandler>
            <MenuList>
                {filter.map((item) => (
                    <MenuItem>{item.tag}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}