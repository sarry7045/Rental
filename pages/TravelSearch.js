import Image from "next/image";
import { useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";
import SearchFilter from "../TravelApp/SearchFilter";
import Property from "../TravelApp/Property";
import { baseUrl, fetchApi } from "../TravelApp/fetchApi";
import { BsFilterSquareFill } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";

const TravelSearch = ({ properties }) => {
  const [searchFilter, setsearchFilter] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="600"
        fontSize="lg"
        alignItems="center"
        justifyContent="center"
        onClick={() => setsearchFilter((prevFilter) => !prevFilter)}
      >
        <Text bg="gray.100">Apply Filter</Text>
        <Icon bg="gray.100" paddingLeft="2" w="7" fontSize="20" as={IoFilter} />
      </Flex>
      {searchFilter && <SearchFilter />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image
            alt="No Reult"
            src="/img/noresult.jpg"
            height={150}
            width={150}
          />
          <Text fontSize="2xl" marginTop="3">
            No Result
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
export default TravelSearch;
