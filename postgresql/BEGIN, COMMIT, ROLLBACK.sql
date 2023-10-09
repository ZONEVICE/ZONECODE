-- https://www.tutorialspoint.com/postgresql/postgresql_transactions.htm

-- Example begin and rollback.

BEGIN;

SELECT 1;

ROLLBACK;

-- Longer syntax way and commit transaction.

BEGIN TRANSACTION;

SELECT 2;

END TRANSACTION;
