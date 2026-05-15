import { useState } from "react";

export default function Filter({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = products.filter(
      (product) =>
        (product.title &&
          product.title.toLowerCase().includes(value.toLowerCase())) ||
        (product.brand &&
          product.brand.toLowerCase().includes(value.toLowerCase())) ||
        (product.category &&
          product.category.toLowerCase().includes(value.toLowerCase())),
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products by name, brand, or category..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
