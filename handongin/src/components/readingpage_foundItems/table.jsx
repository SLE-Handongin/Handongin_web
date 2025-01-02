import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="header-item">번호</div>
        <div className="header-item">제목</div>
        <div className="header-item">종류</div>
        <div className="header-item">보관된 장소</div>
        <div className="header-item">작성된 날짜</div>
      </div>

      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={item.id} className="table-row">
            <div className="row-item">{index + 1}</div>
            <div className="row-item-title">{item.title}</div>
            <div className="row-item-type">{item.category}</div>
            <div className="row-item-type">{item.place}</div>
            <div className="row-item-date">{item.date}</div>
          </div>
        ))
      ) : (
        <div className="no-data">검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default Table;