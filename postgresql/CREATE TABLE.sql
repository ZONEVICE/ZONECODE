CREATE TABLE public.USER (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR(50) NOT NULL,
    EMAIL VARCHAR(100) UNIQUE,
    AGE INTEGER,
    CREATED_AT TIMESTAMPTZ DEFAULT NOW()
);
