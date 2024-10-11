-- Add users
INSERT INTO "users" ("email", "name", "password", "created_at", "updated_at")
VALUES
  ('joao.silva@example.com', 'João Silva', 'senha123', '2024-01-15 10:30:45', NOW()),
  ('maria.souza@example.com', 'Maria Souza', 'senha456', '2024-03-22 12:15:35', NOW()),
  ('carlos.pereira@example.com', 'Carlos Pereira', 'senha789', '2024-05-18 08:25:50', NOW()),
  ('ana.lima@example.com', 'Ana Lima', 'senha101', '2024-07-12 15:45:20', NOW());

-- Add credits
INSERT INTO "credits" ("unit_price", "original_amount", "current_amount", "created_at", "updated_at", "seller_id", "status")
VALUES
  (0.5, 100, 100, '2024-01-30 09:20:10', NOW(), 1, 'AVAILABLE'),
  (0.7, 200, 200, '2024-02-05 11:35:15', NOW(), 2, 'AVAILABLE'),
  (0.6, 150, 150, '2024-03-10 13:40:25', NOW(), 3, 'AVAILABLE'),
  (0.8, 300, 300, '2024-04-14 17:50:30', NOW(), 4, 'AVAILABLE'),
  (0.75, 250, 250, '2024-05-12 14:30:00', NOW(), 1, 'AVAILABLE'),
  (0.65, 175, 175, '2024-06-22 16:25:30', NOW(), 2, 'AVAILABLE'),
  (0.85, 400, 400, '2024-07-18 12:15:45', NOW(), 3, 'AVAILABLE'),
  (0.90, 120, 120, '2024-08-11 10:00:10', NOW(), 4, 'AVAILABLE'),
  (0.55, 90, 90, '2024-09-03 08:45:20', NOW(), 1, 'AVAILABLE'),
  (0.95, 500, 500, '2024-09-30 15:30:55', NOW(), 2, 'AVAILABLE'),
  (0.77, 280, 280, '2024-10-08 13:20:35', NOW(), 3, 'AVAILABLE');


-- Add transactions
INSERT INTO "transactions" ("created_at", "updated_at", "total_price", "credit_amount", "buyer_id", "seller_id", "credit_id")
VALUES
  ('2024-03-15 14:05:20', NOW(), 15, 30, 2, 1, 1),  
  ('2024-05-12 16:45:40', NOW(), 90, 150, 3, 1, 3),  
  ('2024-07-01 10:10:50', NOW(), 35, 70, 4, 1, 1),
  ('2024-09-03 18:55:15', NOW(), 96, 120, 4, 2, 4); 

-- Updates sold credits status
UPDATE "credits"
SET "status" = 'SOLD',
    "current_amount" = 0
WHERE "id" IN (1, 3);

-- Updates partially sold credit current amount
UPDATE "credits"
SET "current_amount" = 204
WHERE "id" = 4;
