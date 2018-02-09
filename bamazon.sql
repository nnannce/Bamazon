CREATE DATABASE bamazon;

-- all of the code will affect "bamazon" --
USE bamazon;

-- Creates the table "products" within bamazon --
CREATE TABLE products (
  ItemID INTEGER(11) AUTO_INCREMENT NOT NULL,
  ProductName  VARCHAR(50) NOT NULL,
  DepartmentName VARCHAR(50) NOT NULL,
  Price DECIMAL(10,2),
  StockQuantity INTEGER(10),
  PRIMARY KEY (ItemID)
);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Nailpolish", "Beauty", 9.95, 10);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Lipstick", "Beauty", 15.90, 15);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Blush", "Beauty", 25.00, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Foundation", "Beauty", 35.95, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("The Nest", "Books", 14.95, 5);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Girlboss", "Books", 10.99, 1);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Still Me", "Books", 14.95, 10);
INSERT INTO products ( ProductName,DepartmentName,Price,StockQuantity)
VALUES ("MacBook Air", "Computers", 899.99, 2);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("HP", "Computers", 479.99, 10);
INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Dell", "Computers", 599.99, 10);

select * FROM products