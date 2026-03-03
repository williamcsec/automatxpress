-- Create the demo bookings table
CREATE TABLE demo_bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    business_type TEXT NOT NULL,
    city TEXT NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public submission)
CREATE POLICY "Allow public inserts for demo bookings" 
ON demo_bookings FOR INSERT 
TO public 
WITH CHECK (true);

-- Create contact messages table
CREATE TABLE contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public submission)
CREATE POLICY "Allow public inserts for contact messages" 
ON contact_messages FOR INSERT 
TO public 
WITH CHECK (true);
