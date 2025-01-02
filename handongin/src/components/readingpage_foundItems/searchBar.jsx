import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchBar.css";
import { db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const SearchBar = ({ setResults }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Firestore에서 모든 데이터를 가져오는 함수
  const fetchAllItems = async () => {
    setIsLoading(true);
    setError("");
    const foundItemsRef = collection(db, "FoundItems");

    try {
      const querySnapshot = await getDocs(foundItemsRef);
      const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setResults(items);
    } catch (error) {
      console.error("Error fetching all items:", error);
      setError("전체 데이터를 가져오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // Firestore에서 조건에 따라 데이터를 검색하는 함수
  const fetchFilteredItems = async () => {
    if (!title.trim() && !type && !location && !startDate && !endDate) {
      setError("검색 조건을 하나 이상 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError("");
    const foundItemsRef = collection(db, "FoundItems");
    let q = query(foundItemsRef);

    if (title.trim()) {
      q = query(q, where("title", ">=", title), where("title", "<=", title + "\uf8ff"));
    }
    if (type) {
      q = query(q, where("category", "==", type));
    }
    if (location) {
      q = query(q, where("place", "==", location));
    }
    if (startDate && endDate) {
      const start = startDate.toISOString().split("T")[0];
      const end = endDate.toISOString().split("T")[0];
      q = query(q, where("date", ">=", start), where("date", "<=", end));
    }

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError("검색 결과가 없습니다.");
        setResults([]);
        return;
      }
      const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setResults(items);
    } catch (error) {
      console.error("Error fetching filtered items:", error);
      setError("데이터를 가져오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 전체 데이터 가져오기
  useEffect(() => {
    fetchAllItems();
  }, []);

  // 리셋 버튼 동작
  const handleReset = () => {
    setTitle("");
    setType("");
    setLocation("");
    setStartDate(null);
    setEndDate(null);
    fetchAllItems();
  };

  return (
    <div className="together">
    <div className="search-bar-container">
      <h2 className="search-title">보관 중인 습득물을 검색해보세요.</h2>
      <div className="search-bar">
        <div className="search-input-row">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
        </div>
        <div className="search-filters">
          <div className="filter-group">
            <label htmlFor="found-type" className="filter-label">습득물 종류</label>
            <select
              id="found-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="filter-dropdown"
            >
              <option value="">습득된 품목 선택</option>
              <option value="카드">카드</option>
              <option value="스마트폰">스마트폰</option>
              <option value="노트북">노트북</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="found-location" className="filter-label">보관된 장소</label>
            <select
              id="found-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="filter-dropdown"
            >
              <option value="">보관된 장소 선택</option>
              <option value="학용조합">학용조합</option>
              <option value="도서관">도서관</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="found-date" className="filter-label">작성된 날짜</label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="시작 날짜"
                className="date-picker"
              />
              <span> ~ </span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="종료 날짜"
                className="date-picker"
              />
            </div>
          </div>
        </div>
      </div>

      {error && <p>{error}</p>}
    </div>
    <div>
      <div>
        <button onClick={fetchFilteredItems} disabled={isLoading} className="search-icon-button">
          {isLoading ? "검색 중..." : "🔍 검색"}
        </button>
        </div>
        <div>
        <button onClick={handleReset} disabled={isLoading} className="reset-icon-button">
          리셋
        </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;