fetch(
  "https://api.unsplash.com/photos/random?client_id=M5_d8xJzkbs0tOoH_t56SMhT05UZY3JViJz6_uC7QzI"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(`${data.urls.raw}&q=85&w=1920`);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
