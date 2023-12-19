const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://lampmliaryctauanisfs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhbXBtbGlhcnljdGF1YW5pc2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwMDE2MjMsImV4cCI6MjAxODU3NzYyM30.mhiyCsP4IFcF_ahkDZrBjSyk6Fh39LmrWJTqz-reQc8'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/home.html', { root: __dirname })
})


app.post('/contactFormSubmission', async (req, res) => {
    try {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        console.log('Received form data:', { name, email, message });

        // Insert data into the user_messages table in Supabase
        const { data, error } = await supabase
        .from('user_messages')
        .insert([
            {'Name': name, 'Email': email, 'Message': message}
        ])
        .select();


        if (error) {
            console.error('Supabase error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Form submitted successfully!' });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log('APP IS RUNNING')
})