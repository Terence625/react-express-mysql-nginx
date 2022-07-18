import React, {useState, useEffect} from 'react'
import PageContainer from '../common/PageContainer'
import Table from '../common/Table'

const initialPeopleList = [
  { name: "Terence", dob: "1993-04-25", nationality: "China" },
  { name: "Jade", dob: "1998-12-08", nationality: "Indonesia" },
];
const columnHeader: {
  key: "name" | "dob" | "nationality";
  label: string;
}[] = [
  { key: "name", label: "Name" },
  { key: "dob", label: "Date of Birthday" },
  { key: "nationality", label: "Nationality" },
];

const PersonTablePage = () => {
  const [peopleList, setPeopleList] = useState(initialPeopleList);

  useEffect(() => {
    
  })

  return (
    <PageContainer isLoading={false} isError={false}>
      <Table columnHeaderList={columnHeader} rowList={peopleList}/>
    </PageContainer>
  )
}

export default PersonTablePage