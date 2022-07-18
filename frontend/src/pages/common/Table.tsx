import React, { useState } from "react";
import "./Table.css";

const setArrayObjAllProperty = <T, K extends string, V>(
  arrObj: Record<K, V>[],
  value: T
): Record<string, T>[] => {
  return Array.from(arrObj, (row) =>
    Object.keys(row).reduce((acc, key) => {
      return { ...acc, [key]: value };
    }, {})
  );
};

const setIndexObject = <T extends object[], V>(
  arr: T,
  value: V
): Record<number, V> => {
  const obj = {} as Record<number, V>;
  for (let i = 0; i < arr.length; i++) {
    obj[i] = value;
  }
  return obj;
};

interface ITableProps<RowType, K> {
  columnHeaderList: {
    key: K;
    label: string;
  }[];
  rowList: RowType[];
  onChange?: (value: RowType[]) => void;
  editable?: boolean;
}

const Table = <RowType extends Record<K, string>, K extends keyof RowType>({
  columnHeaderList,
  rowList,
  onChange,
  editable = false,
}: ITableProps<RowType, K>) => {
  const columnHeaderKeyList = columnHeaderList.map((header) => header.key);
  const initialCellEditable = setArrayObjAllProperty(rowList, false);
  const initialRowsChecked = setIndexObject(rowList, false);
  const [cellEditable, setCellEditable] = useState(initialCellEditable);
  const [rowsChecked, setRowsChecked] = useState(initialRowsChecked);
  const [headerChecked, setHeaderChecked] = useState(false);
  const handleCellChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: K
  ) => {
    onChange?.(
      rowList.map((row, i) => {
        if (i === index) {
          return { ...row, [key]: e.target.value };
        }
        return row;
      })
    );
  };

  const setCellEditableFun = (index: number, key: K, boo: boolean) => {
    setCellEditable(
      cellEditable.map((cell, i) => {
        if (i === index) {
          return { ...cell, [key]: boo };
        }
        return cell;
      })
    );
  };

  const handleAddNewLine = () => {
    const newRowList = [
      ...rowList,
      columnHeaderKeyList.reduce((acc, key) => {
        return { ...acc, [key]: "" };
      }, {}) as RowType,
    ];
    onChange?.(newRowList);
    setCellEditable(setArrayObjAllProperty(newRowList, false));
    setRowsChecked((rows) => ({ ...rows, [newRowList.length - 1]: false }));
  };

  const handleDeleteRows = () => {
    const newRowList = rowList.filter((row, index) => !rowsChecked[index]);
    onChange?.(newRowList);
    setCellEditable(setArrayObjAllProperty(newRowList, false));
    setRowsChecked(setIndexObject(newRowList, false));
    setHeaderChecked(false);
  };

  const dataCells = (index: number, key: K, value: string) => {
    if (editable) {
      return (
        <td
          key={String(key)}
          onDoubleClick={() => setCellEditableFun(index, key, true)}
        >
          {(cellEditable[index] as Record<K, boolean>)[key] ? (
            <div className="inputCell">
              <input
                autoFocus
                value={value}
                onChange={(e) => handleCellChange(e, index, key)}
                onBlur={() => setCellEditableFun(index, key, false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setCellEditableFun(index, key, false);
                }}
              />
            </div>
          ) : (
            <div className="dataCell">{value}</div>
          )}
        </td>
      );
    } else {
      return (
        <td key={String(key)}>
          <div className="dataCell">{value}</div>
        </td>
      );
    }
  };

  const columnHeaders = columnHeaderKeyList.map((key, index) => (
    <th key={index}>
      <div className="dataCell">{columnHeaderList[index].label}</div>
    </th>
  ));

  const dataRows = rowList.map((row, index) => {
    return (
      <tr key={String(index)}>
        {editable && (
          <td>
            <input
              type="checkbox"
              id={String(index)}
              checked={rowsChecked[index]}
              onChange={(e) =>
                setRowsChecked((rows) => ({
                  ...rows,
                  [index]: e.target.checked,
                }))
              }
            />
          </td>
        )}
        {columnHeaderKeyList.map((key) => dataCells(index, key, row[key]))}
      </tr>
    );
  });

  return (
    <div className="Table">
      {editable && (
        <div>
          <button onClick={handleAddNewLine}>Add</button>
          <button onClick={handleDeleteRows}>Delete</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            {editable && (
              <th>
                <input
                  type="checkbox"
                  checked={headerChecked}
                  onChange={(e) => {
                    setHeaderChecked(e.target.checked);
                    setRowsChecked((rows) => {
                      const newRowsChecked: Record<number, boolean> = {};
                      for (const key in rows)
                        newRowsChecked[key] = e.target.checked;
                      return newRowsChecked;
                    });
                  }}
                />
              </th>
            )}
            {columnHeaders}
          </tr>
        </thead>
        <tbody>{dataRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
