 
 User.create!(username: "alice", password: "password")
 User.create!(username: "bob", password: "password")
 User.create!(username: "charlie", password: "password")


Book.create!(title: "Wild", description: "A memoir about self-discovery through solo hiking.", author: "Cheryl Strayed", genre: "Memoir", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66", user_id: 1)
Book.create!(title: "The Night Circus", description: "A magical competition set inside a mysterious circus.", author: "Erin Morgenstern", genre: "Fantasy", image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d", user_id: 1)
Book.create!(title: "Educated", description: "A powerful memoir about growing up and breaking free.", author: "Tara Westover", genre: "Memoir", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba", user_id: 1)
Book.create!(title: "Atomic Habits", description: "A guide to building good habits and breaking bad ones.", author: "James Clear", genre: "Self-Help", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93", user_id: 1)

Review.create!(comment: "Absolutely loved this book — inspiring and emotional.", rating: 5, user_id: 1, book_id: 1)
Review.create!(comment: "Beautifully written and impossible to put down.", rating: 5, user_id: 1, book_id: 2)
Review.create!(comment: "Raw, honest, and incredibly powerful.", rating: 5, user_id: 1, book_id: 3)
Review.create!(comment: "Practical advice that actually sticks.", rating: 5, user_id: 1, book_id: 2)

