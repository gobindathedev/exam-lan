-- Create a function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert a row into public.profiles
  INSERT INTO public.profiles (
    user_id,
    email,
    full_name,
    is_admin,
    is_student,
    admin_approved
  ) VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE((NEW.raw_user_meta_data->>'is_admin')::boolean, FALSE),
    COALESCE((NEW.raw_user_meta_data->>'is_student')::boolean, TRUE),
    -- Auto-approve students, admins need manual approval
    CASE 
      WHEN COALESCE((NEW.raw_user_meta_data->>'is_admin')::boolean, FALSE) = TRUE THEN FALSE
      ELSE TRUE
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the function on user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 