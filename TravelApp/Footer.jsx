import { Box } from "@chakra-ui/layout";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.800"
    borderTop="1px"
    borderColor="gray.300"
  >
    <strong>
      © All Rights Reserved | Rental |{" "}
      <a href="https://surajyadav.vercel.app/" target="_balnk">
        Suraj Yadav
      </a>
    </strong>
  </Box>
);

export default Footer;
