import styled from "styled-components";
import Header from "../components/readingpage_foundItems/header";
import SearchBar from "../components/readingpage_foundItems/searchBar";
import Table from "../components/readingpage_foundItems/table";
import Pagination from "../components/readingpage_foundItems/pagination";
import { useState } from "react";

function ReadingPageFound() {
  const [results, setResults] = useState([]); // 검색 결과 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 10; // 한 페이지에 표시할 항목 수

  // 현재 페이지에 해당하는 데이터 가져오기
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Div>
        <Header />
      </Div>
      <SearchBar setResults={setResults} /> {/* 검색 결과를 업데이트 */}
      {results.length > 0 && (
        <>
          <Table data={paginatedResults} /> {/* 현재 페이지에 해당하는 데이터만 전달 */}
          <Pagination
            totalItems={results.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)} // 페이지 변경 핸들러
          />
        </>
      )}
    </>
  );
}

export default ReadingPageFound;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;