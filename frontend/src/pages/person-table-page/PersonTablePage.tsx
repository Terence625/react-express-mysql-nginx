import React, { useState, useEffect } from "react";
import PageContainer from "../common/PageContainer";
import Table from "../common/Table";
import useRequest from "../hooks/useRequest";

const columnHeader: {
  key: "name" | "phone" | "email";
  label: string;
}[] = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
];

type PeopleListType = Array<{
  name: string;
  phone: string;
  email: string;
}>;

const PersonTablePage = () => {
  const [peopleList, setPeopleList] = useState<PeopleListType>([]);
  const { isError, isLoading, request } = useRequest<
    {},
    { personList: PeopleListType }
  >({
    method: "get",
    url: "/searchPerson?name=",
  });

  useEffect(() => {
    request().then((res) => {
      setPeopleList(res.personList);
    });
  }, []);

  return (
    <PageContainer isError={isError} isLoading={isLoading}>
      <Table columnHeaderList={columnHeader} rowList={peopleList} />
    </PageContainer>
  );
};

export default PersonTablePage;
