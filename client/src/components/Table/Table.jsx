import React from "react";
import MUIDataTable from "mui-datatables";

const Table = props => {
	const { booksInfo } = props;

	const columns = [
		{
			name: "name",
			label: "Name",
		},
		{
			name: "createdAt",
			label: "createdAt",
		},
		{
			name: "numberOfPages",
			label: "numberOfPages",
		},
		{
			name: "updatedAt",
			label: "updatedAt",
		},
		{
			name: "id",
			label: "id",
		},
	];

	const TableData = books => {
		let booksArray = [];
		books.forEach(book => {
			booksArray.push({
				createdAt: book.createdAt,
				name: book.name,
				numberOfPages: book.numberOfPages,
				updatedAt: book.updatedAt,
				id: book._id,
			});
		});

		return booksArray;
	};

	const data = TableData(booksInfo);

	const options = {
		filterType: "checkbox",
	};

	return (
		<MUIDataTable
			title={"Books List"}
			data={data}
			columns={columns}
			options={options}
		/>
	);
};
export default Table;
