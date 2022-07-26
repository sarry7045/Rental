import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.300">
    <Box fontSize="3xl" color="#4169E1" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Rental
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          //   variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<AiFillHome style={{ color: "#4169E1" }} />}>
              Home
            </MenuItem>
          </Link>
          <Link href="/TravelSearch" passHref>
            <MenuItem icon={<BsSearch style={{ color: "#4169E1" }} />}>
              Search
            </MenuItem>
          </Link>
          <Link href="/TravelSearch?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout style={{ color: "#4169E1" }} />}>
              Buy Property
            </MenuItem>
          </Link>
          <Link href="/TravelSearch?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey style={{ color: "#4169E1" }} />}>
              Rent Property
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
