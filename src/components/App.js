import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [Page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {Page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;