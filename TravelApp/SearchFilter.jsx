import { useState, useEffect } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "./filterData";

const SearchFilter = () => {
  const [filter, setfilter] = useState(filterData);
  const router = useRouter();

  const serachProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname: path, query });
  };
  return (
    <Flex bg="gray.200" p="4" justifyContent="center" flexWrap="wrap">
      {filter.map((value) => (
        <Box key={value.queryName}>
          <Select
            placeholder={value.placeholder}
            w="fit-content"
            p="3"
            m="2"
            justifyContent="space-between"
            onChange={(e) =>
              serachProperties({ [value.queryName]: e.target.value })
            }
          >
            {value?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.value}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};
export default SearchFilter;
