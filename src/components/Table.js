import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { AddModal } from "./AddModal";
import { TableModal } from "./TableModal";

export const Table = (props) => {
  const { list, update, tableType } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editValue, setEditValue] = useState({});

  const handleUpdate = (data) => {
    setEditValue(data);
    setIsOpen(true);
  };

  useEffect(() => {
    setRows(list);
  }, [list]);

  return (
    <div className="rounded container p-2 mx-auto sm:p-4 bg-white">
      <div className="flex justify-between">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Lists</h2>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 hover:bg-slate-300 font-semibold border rounded"
        >
          Add
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="">
              {list.length > 0 &&
                Object.keys(list[0]).map((key) => <th key={key}>{key}</th>)}
              {/* ['name', 'price', 'imgSrc'] */}
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b">
            {rows?.map((data, index) => (
              <tr key={`table-row-${index}`}>
                {Object.entries(data).map(([key, value]) => (
                  <td key={key} className="px-3 text-2xl">
                    {key === "imgSrc" ? <img src={value} /> : value}
                  </td>
                ))}
                <td className="px-3 py-2">
                  <div className="relative pb-8">
                    <Dropdown
                      items={["Edit", "Delete"]}
                      id={data.id}
                      update={(data) => handleUpdate(data)}
                      delete={(id) => props.delete(id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TableModal
        isOpen={isOpen}
        toggleModal={(status) => setIsOpen(status)}
        editValue={editValue}
        updateValue={(data) => update(data)}
      />
      <AddModal
        isOpen={isOpen}
        toggleModal={(status) => setIsOpen(status)}
        create={(data) => props.create(data)}
        tableType={tableType}
      />
    </div>
  );
};
