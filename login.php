<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Load existing users
    $users_file = 'users/users.json';
    $users = json_decode(file_get_contents($users_file), true);

    // Ensure $users is an array
    if (!is_array($users)) {
        $users = [];
    }

    // Check for user
    foreach ($users as $user) {
        if ($user['email'] == $email && password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            $_SESSION['photo'] = $user['photo'];
            $_SESSION['role'] = $user['role'];

            header("Location: index.php");
            exit();
        }
    }
    $error_message = "Invalid email or password.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Login to Your Account</h1>
        <p>Please enter your credentials</p>
    </header>
    <main>
        <div class="container login-container">
            <h2 class="text-center">Login</h2>
            <?php if (isset($error_message)): ?>
                <div class="alert alert-danger"><?php echo $error_message; ?></div>
            <?php endif; ?>
            <form action="login.php" method="post">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <p class="text-center mt-3">Don't have an account? <a href="register.php">Register here</a>.</p>
        </div>
    </main>
    <footer>
        <p>Follow us on social media: <a href="https://www.youtube.com/watch?v=87SIhiQPjtk" target="_blank">YouTube</a></p>
        <p>&copy; 2024 BDSM Test. All rights reserved.</p>
    </footer>
</body>
</html>
