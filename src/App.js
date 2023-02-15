import React, { useState } from "react";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import employees from "./data/emp.json";
import PaginatedList from "./components/PaginatedList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const data = employees;

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filteredEmployees = data.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.website.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div>
      <Layout>
        <Navigation onSearch={handleSearchTerm} searchTerm={searchTerm} />
        <PaginatedList itemsPerPage={10} items={filteredEmployees} />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
