const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register controller
const registerUser = async (req, res) => {
  try {
    //extract user information from our request body
    const { username, email, password, role } = req.body;

    //check if the user is already exists in our database
    const checkExistingUser = await User.findOne({
      $or: [{ email }],
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User is already exists with same email. Please try with a different email",
      });
    }
    console.log("User is not exists, so we can create a new user");
    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // ensure role is lowercase
    //create a new user and save in your database
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role.toLowerCase() || "user",
    });
    console.log("Newly created user:", newlyCreatedUser);
    await newlyCreatedUser.save();
    console.log("User saved successfully:", newlyCreatedUser);
    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message: "User registered successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register user! please try again.",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

//login controller

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    //find if the current user is exists in database or not
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: `User doesn't exists`,
      });
    }
    //if the password is correct or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    //create user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
      }
    );

    res.status(200).json({
      success: true,
      message: "Logged in successful",
      accessToken,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

const changePassword = async (req, res) => {
  try {
    //find the user
    const userId = req.userInfo.userId;
    //extract the new password from request body
    const { currentPassword, newPassword } = req.body;
    //find the user in database
    const user = await User.findById(userId);
    console.log("User found in changePassword:", user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    console.log("Current password:", currentPassword);
    //check if the current password is correct
    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const newhashedPassword = await bcrypt.hash(newPassword, salt);
    //update the user password
    user.password = newhashedPassword;
    const updatedUser = await user.save();
    if (updatedUser) {
      res.status(200).json({
        success: true,
        message: "Password changed successfully",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

module.exports = { registerUser, loginUser, changePassword };
