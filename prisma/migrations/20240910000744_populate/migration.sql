-- Add users
INSERT INTO "users" ("email", "name", "password", "created_at", "updated_at")
VALUES
  ('john.doe@example.com', 'John Doe', 'password123', NOW(), NOW()),
  ('jane.smith@example.com', 'Jane Smith', 'password456', NOW(), NOW()),
  ('alice.johnson@example.com', 'Alice Johnson', 'password789', NOW(), NOW()),
  ('bob.brown@example.com', 'Bob Brown', 'password101', NOW(), NOW());

-- Add credits
INSERT INTO "credits" ("unit_price", "original_amount", "current_amount", "created_at", "updated_at", "seller_id", "status")
VALUES
  (0.5, 100, 100, NOW(), NOW(), 1, 'AVAILABLE'),
  (0.7, 200, 200, NOW(), NOW(), 2, 'AVAILABLE'),
  (0.6, 150, 150, NOW(), NOW(), 3, 'AVAILABLE'),
  (0.8, 300, 300, NOW(), NOW(), 4, 'AVAILABLE');

-- Add transactions
INSERT INTO "transactions" ("created_at", "updated_at", "total_price", "credit_amount", "buyer_id", "seller_id", "credit_id")
VALUES
  (NOW(), NOW(), 15, 30, 2, 1, 1),  
  (NOW(), NOW(), 90, 150, 3, 1, 3),  
  (NOW(), NOW(), 35, 70, 4, 1, 1),
  (NOW(), NOW(), 96, 120, 4, 2, 4); 

-- Updates sold credits status
UPDATE "credits"
SET "status" = 'SOLD',
    "current_amount" = 0
WHERE "id" IN (1, 3);

-- Updates partially sold credit current amount
UPDATE "credits"
SET "current_amount" = 204
WHERE "id" = 4; 
