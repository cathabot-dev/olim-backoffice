import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { IPayment } from "../payment/usePayment";

interface IProps {
  payments: IPayment[];
}

export default function TablePayments(props: IProps) {
  const { payments } = props;
  return (
    <>
      <div className="bg-white rounded-lg drop-shadow">
        <div className="flex p-4 justify-between">
          <label className="font-bold">Payment Gateway</label>
        </div>

        <Table
          aria-label="Peserta Terdaftar"
          isStriped
          className="text-nowrap w-full rounded-lg overflow-hidden"
        >
          <TableHeader className="h-10 text-center text-white bg-brand-dark">
            <TableColumn align="center" scope="col" className="w-[80px]">
              No.
            </TableColumn>
            <TableColumn align="center" scope="col">
              Name
            </TableColumn>
            <TableColumn align="center" className="" scope="col">
              Provider
            </TableColumn>
            <TableColumn align="center" scope="col">
              Code
            </TableColumn>
            <TableColumn align="center" scope="col">
              Fee
            </TableColumn>
            <TableColumn align="center" scope="col">
              Fee Percentage
            </TableColumn>
            <TableColumn align="center" scope="col">
              Min Amount
            </TableColumn>
            <TableColumn align="center" scope="col">
              Max Amount
            </TableColumn>
            <TableColumn align="center" scope="col">
              Status
            </TableColumn>
            <TableColumn
              align="center"
              className={` w-14 text-center`}
              scope="col"
            >
              Action
            </TableColumn>
          </TableHeader>
          <TableBody className="">
            {payments?.map((data, i) => (
              <TableRow key={i}>
                <TableCell data-label="No">{i + 1}</TableCell>
                <TableCell className="text-start" data-label="name">
                  {data.name}
                </TableCell>
                <TableCell className="text-start" data-label="provider">
                  {data.provider}
                </TableCell>
                <TableCell data-label="code">{data.code}</TableCell>
                <TableCell data-label="fee_flat">{data.fee_flat}</TableCell>
                <TableCell data-label="fee_percentage">
                  {data.fee_percentage}
                </TableCell>
                <TableCell data-label="min_amount">{data.min_amount}</TableCell>
                <TableCell data-label="max_amount">{data.max_amount}</TableCell>
                <TableCell data-label="is_active">{`${data.is_active}`}</TableCell>
                <TableCell
                  data-label="Actions"
                  className={` text-center flex items-center justify-center gap-2 font-bold`}
                  scope="col"
                >
                  action
                  {/* <Link
                  className="flex items-center gap-2 p-2 mb-2 mr-2 text-sm font-bold text-center duration-500 rounded-full border-1 w-fit hover:text-white hover:bg-brand focus:outline-none focus:ring-red-300 "
                  href={ROUTES.PARTICIPANT_EDIT + "/" + data.id}
                >
                  <AiTwotoneEdit />
                </Link>
                <button
                  onClick={() => setIsModal(true)}
                  className="flex items-center gap-2 p-2 mb-2 mr-2 text-sm font-bold text-center text-red-600 duration-500 rounded-full border-1 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-red-300"
                >
                  <MdOutlineDelete />
                </button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
