import React, { useEffect, useState } from "react";
import FilesTable from "./components/FilesTable.jsx";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function fetchPage(p = 1, ps = pageSize) {
    setLoading(true); setErr("");
    try {
      const res = await fetch(`${API_BASE}/api/files?page=${p}&pageSize=${ps}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setItems(data.items || []);
      setTotal(data.total || 0);
      setPage(data.page || p);
      setPageSize(data.pageSize || ps);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchPage(1, pageSize); }, []);

  return (
    <div style={{ fontFamily: "system-ui, Arial", padding: 20 }}>
      <h2>Files (SQLite)</h2>
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => fetchPage(1, pageSize)} disabled={loading}>
          Reload
        </button>
        {err && <span style={{ color: "crimson", marginLeft: 12 }}>Error: {err}</span>}
      </div>

      <FilesTable
        rows={items}
        page={page}
        pageSize={pageSize}
        total={total}
        loading={loading}
        onPageChange={(nextPage, nextPageSize) => fetchPage(nextPage, nextPageSize)}
      />
    </div>
  );
}
