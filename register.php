<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $photo = $_FILES['photo']['name'];
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($photo);

    // Load existing users
    $users_file = 'users/users.json';
    $users = json_decode(file_get_contents($users_file), true);

    // Ensure $users is an array
    if (!is_array($users)) {
        $users = [];
    }

    // Check if email or username already exists
    foreach ($users as $user) {
        if ($user['email'] == $email) {
            $error_message = "Email already registered. Please try again.";
            break;
        }
        if ($user['username'] == $username) {
            $error_message = "Username already taken. Please try again.";
            break;
        }
    }

    if (!isset($error_message)) {
        // Move the uploaded file to the server
        if (move_uploaded_file($_FILES['photo']['tmp_name'], $target_file)) {
            // Add new user to the users array
            $users[] = ['username' => $username, 'email' => $email, 'password' => $password, 'photo' => $target_file, 'role' => 'user'];

            // Save the updated users array back to the file
            file_put_contents($users_file, json_encode($users));

            $success_message = "Registration successful. <a href='login.php'>Login here</a>.";
        } else {
            $error_message = "Error uploading photo. Please try again.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Create a New Account</h1>
        <p>Join us and start your journey</p>
    </header>
    <main>
        <div class="container register-container">
            <h2 class="text-center">Register</h2>
            <?php if (isset($error_message)): ?>
                <div class="alert alert-danger"><?php echo $error_message; ?></div>
            <?php endif; ?>
            <?php if (isset($success_message)): ?>
                <div class="alert alert-success"><?php echo $success_message; ?></div>
            <?php endif; ?>
            <form action="register.php" method="post" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="photo">User Photo:</label>
                    <input type="file" class="form-control-file" id="photo" name="photo">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Register</button>
            </form>
            <p class="text-center mt-3">Already have an account? <a href="login.php">Login here</a>.</p>
        </div>
    </main>
    <footer>
        <p>Follow us on social media: <a href="https://www.youtube.com/watch?v=87SIhiQPjtk" target="_blank">YouTube</a></p>
        <p>&copy; 2024 BDSM Test. All rights reserved.</p>
    </footer>
</body>
</html>
