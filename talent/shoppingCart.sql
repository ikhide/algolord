SELECT product, SUM(quantity*unit_price) AS Total_Price
FROM shopping_history
GROUP BY product