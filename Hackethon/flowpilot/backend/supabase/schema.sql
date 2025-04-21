create table users (
  id uuid primary key default gen_random_uuid(),
  wallet_address text,
  email text
);

create table summaries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  date date,
  focus_score float,
  summary text
);
