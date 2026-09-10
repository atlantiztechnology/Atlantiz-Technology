/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the sender's full name
  - `email` (text, not null) — the sender's email address
  - `project_type` (text, nullable) — what kind of project the client wants
  - `budget` (text, nullable) — estimated budget range
  - `message` (text, not null) — the project enquiry message
  - `status` (text, default 'new') — tracking status: new, read, replied, archived
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon or authenticated — only the service role can read/manage submissions.

3. Notes
- This is a no-auth public contact form. Anyone visiting the site can submit an enquiry.
- Submissions are read-only from the dashboard/service role; visitors cannot read or modify them.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public insert (anyone can submit the contact form)
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No SELECT, UPDATE, or DELETE policies — submissions are managed via the service role only
