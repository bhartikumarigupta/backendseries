const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017";

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");

        const userSchema = new mongoose.Schema({
            name: String,
            email: String,
            age: Number,
            address: String,
            isActive: Boolean,
            tags: [String],
            createdAt: {
                type: Date,
                default: Date.now
            }
        });

        const User = mongoose.model('User', userSchema);

        async function runQueryExamples() {
            try {
                /*
                                const newUser = await User.create({
                                    name: "Shreya  Gupta",
                                    email: "shreya97099@gmail.com",
                                    age: 23,
                                    address: "Naubatpur",
                                    isActive: false,
                                    tags: ["first", "second", "third"]
                                });
                                console.log("Created new user:", newUser);
                                */
                // find all  users
                /*
                const allUsers = await User.find();
                console.log("All users:", allUsers);
                */
                // find active user only
                const ActiveUser = await User.find({ isActive: true });
                console.log("Active users:", ActiveUser);
                //find user by name
                const SpecificUser = await User.find({ name: "Shadhvi Kumari" });
                if (SpecificUser.length === 0) {
                    console.log("No user found with the specified name.");
                }
                else {
                    console.log("Specific user:", SpecificUser);
                }
                // last created user
                const LastCreatedUser = await User.findOne().sort({ createdAt: -1 });

                console.log("Last created user:", LastCreatedUser);
                // LAST CREATED USER BY USER ID
                // const LastCreatedUserById = await User.findById(newUser._id);
                // console.log("Last created user by ID:", LastCreatedUserById);

                /*  const selectedFields = await User.find().select('name email -_id');
                  console.log("Selected fields (name, email):", selectedFields);
             */
                /*
                    const limitedUsers = await User.find().limit(5).skip(1);
                    console.log("limited users (5, skip 1):", limitedUsers);
                    */
                // sorting
                /*
                const sortedUsers = await User.find().sort({ age: -1 }); // 1 for ascending, -1 for descending
                console.log("Sorted users by age (descending): ", sortedUsers);
                */
                // count users
                /*
                const userCount = await User.countDocuments({
                    isActive: true
                });
                console.log("Count of active users:", userCount);
                */
                // delete  user
                /*
                                const deletedUser = await User.findByIdAndDelete("6851c2d8422d85e0313f05e3");
                                if (deletedUser) {
                                    console.log("Deleted user:", deletedUser);
                                } else {
                                    console.log("No user found with the specified ID.");
                                }
                */
                // update user
                const updateUser = await User.findByIdAndUpdate(
                    "6851c1a1bef4ae99ab4afc15",
                    { name: "Updated Name" },
                    { new: true } // Return the updated document
                );
                if (updateUser) {
                    console.log("Updated user:", updateUser);
                } else {
                    console.log("No user found with the specified ID.");
                }
            } catch (e) {
                console.error('Error:', e);
            } finally {
                await mongoose.connection.close();
            }
        }

        runQueryExamples();
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
