create table public.usage_events (
  id bigint generated always as identity primary key,
  event_name text not null,
  target_id text null,
  compliment_id text null,
  session_id uuid not null,
  created_at timestamptz not null default now(),
  constraint usage_events_event_name_check
    check (event_name in ('app_open', 'target_selected', 'compliment_selected')),
  constraint usage_events_payload_shape_check
    check (
      (
        event_name = 'app_open'
        and target_id is null
        and compliment_id is null
      )
      or (
        event_name = 'target_selected'
        and target_id is not null
        and compliment_id is null
      )
      or (
        event_name = 'compliment_selected'
        and target_id is not null
        and compliment_id is not null
      )
    )
);

alter table public.usage_events enable row level security;

revoke all on table public.usage_events from anon, authenticated, public;
grant insert on table public.usage_events to anon;
grant usage on sequence public.usage_events_id_seq to anon;

create policy "anon can insert usage events"
  on public.usage_events
  for insert
  to anon
  with check (true);
