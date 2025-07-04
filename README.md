# Product App

A simple Angular application for managing products. Users can add, update, and delete products using a RESTful API backend.

## Features

- List all products
- Add a new product
- Update existing products
- Delete products

## Project Structure

- `src/app/app.component.*` - Main application component
- `src/app/product/product.component.*` - Product management component
- `src/app/product/product.model.ts` - Product model

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- A running backend API at `https://localhost:7264/api/products`

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd product-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    ng serve
    ```
    The app will be available at `http://localhost:4200/`.

## Usage

- Use the form to add a new product (name and price required).
- Edit product details inline and click "Update" to save changes.
- Click "Delete" to remove a product.

## API

The app expects a REST API with the following endpoints:

- `GET /api/products` - List products
- `POST /api/products` - Add product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product

## License

MIT
