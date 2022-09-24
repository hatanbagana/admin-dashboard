import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const Table = (props) => {
  const { list } = props;

  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log(list);
    setRows(list);
  }, [list]);

  return (
    <div className="rounded container p-2 mx-auto sm:p-4 bg-white">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Lists</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Job title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Address</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b">
            {rows?.map((data, index) => (
              <tr key={`table-row-${index}`}>
                <td className="px-3 text-2xl font-medium">A</td>
                <td className="px-3 py-2">
                  <p>{data.test}</p>
                </td>
                <td className="px-3 py-2">
                  <span>{data.nvd}</span>
                </td>
                <td className="px-3 py-2">
                  <p>555-873-9812</p>
                </td>
                <td className="px-3 py-2">
                  <p>dwight@adams.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                </td>
                <td className="px-3 py-2">
                  <div className="relative pb-8">
                    <Dropdown />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
