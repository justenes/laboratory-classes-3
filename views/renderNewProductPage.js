function renderNewProductPage(data) {
  if (!data) {
    return `
      <h1>No product data available.</h1>
      <a href="/">⬅️ Back to Home</a>
    `;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>New Product</title>
    </head>
    <body>
      <h1>New Product Added:</h1>
      <p>${data}</p>
      <a href="/">⬅️ Back to Home</a>
    </body>
    </html>
  `;
}

module.exports = renderNewProductPage;
