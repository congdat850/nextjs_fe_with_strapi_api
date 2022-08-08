import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RenderTable from "components/RenderTable";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color = "light", res = { } }) {
  const titles = ["id", "User name", "email", "role"];
  const [data, setData] = useState({});

  useEffect(() => {
    setData(res);
  }, [res]);
  return <RenderTable titles={titles} items={data.data || []} />;
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
