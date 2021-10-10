"use strict";

const xlsx = require("xlsx");
const allproducts = xlsx.readFile(`product.xlsx`);
const book1ws = allproducts.Sheets[allproducts.SheetNames[0]];
const book1data = xlsx.utils.sheet_to_json(book1ws);

const convertedData = book1data.map((data, index) => {
  if (
    data.images !== undefined &&
    data.images !== null &&
    data.published === "Yes"
  ) {
    return {
      id: index + 1,
      title: data.name_ar,
      description:
        data.description_ar !== undefined && data.description_ar !== null
          ? data.description_ar.split("&nbsp;").join(" ")
          : "******* No Description *******",
      availability: "in stock",
      condition: "new",
      price: data.price + " SAR",
      link: "http://tawabel7.com/products/",
      image_link: data.images.split(",")[0],
      brand: "tawabel7",
      inventory: 1,
      google_product_category: "Food, Beverages & Tobacco > Food Items",
      fb_product_category: "food & beverages > food",
      sale_price:
        data.sale_price !== undefined && data.sale_price !== null
          ? data.sale_price + " SAR"
          : data.price + " SAR",
      additional_image_link: data.images.split(",")[0],
    };
  }
});

const allData = convertedData.filter((data) => data !== undefined);

// console.log(allData)

const newWB = xlsx.utils.book_new();
const newWS = xlsx.utils.json_to_sheet(allData);
xlsx.utils.book_append_sheet(newWB, newWS, "my new products");

xlsx.writeFile(newWB, "my new products.xlsx");
