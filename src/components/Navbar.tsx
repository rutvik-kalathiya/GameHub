import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp';


function Navbar() {
    return(
        <HStack>
            <Image src={logo} alt='logo' boxSize='60px'/>
            <h1>Navbar</h1>
        </HStack>
    );
}

export default Navbar;