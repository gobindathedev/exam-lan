-- Allow anyone to insert into profiles during signup
CREATE POLICY "Allow inserts to profiles during signup"
  ON public.profiles
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to insert into profiles (alternative approach)
CREATE POLICY "Allow authenticated users to insert into profiles"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Allow service role to bypass all RLS
ALTER TABLE public.profiles FORCE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY; 