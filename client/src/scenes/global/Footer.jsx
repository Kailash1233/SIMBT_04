import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  return (
    <Box
      marginTop="70px"
      padding="40px 0"
      backgroundColor={"#333"}
      color={"white"}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[100]}
          >
            GK CLOTHING
          </Typography>
          <div>
            Your one-stop shop for trendy clothing. Discover top-notch fashion
            essentials in just a few clicks. Stay ahead in style with our
            curated collection. Experience convenience and quality with GK
            CLOTHING.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">ECR Road, Chennai, TamilNadu</Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: gkclothing@gmail.com
          </Typography>
          <Typography mb="30px">(+91)99999-99999</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
