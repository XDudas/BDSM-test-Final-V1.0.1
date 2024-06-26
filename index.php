<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BDSM Test</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>

    <style>
        .welcome-container {
            display: <?php echo isset($_SESSION['username']) ? 'block' : 'none'; ?>;
            margin-bottom: 20px;
            background: #333;
            border-radius: 8px;
            padding: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 2px 2px 5px #000, -2px -2px 5px #666;
        }
        .guest-container {
            display: <?php echo isset($_SESSION['username']) ? 'none' : 'block'; ?>;
            margin-bottom: 20px;
            background: #333;
            border-radius: 8px;
            padding: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 2px 2px 5px #000, -2px -2px 5px #666;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to the BDSM Test</h1>
        <p>The original BDSM and kink test</p>


        <div>
            <div class="d-flex justify-content-end align-items-center">
                <?php if (isset($_SESSION['username'])): ?>
                    <img src="<?php echo $_SESSION['photo']; ?>" alt="User Photo" class="rounded-circle" width="50" height="50">
                    <span class="ml-2"><?php echo $_SESSION['username']; ?></span>
                    <?php if ($_SESSION['role'] == 'admin'): ?>
                        <span class="ml-2 badge badge-warning">Admin</span>
                    <?php endif; ?>
                    <a href="logout.php" class="ml-3 btn btn-secondary">Logout</a>
                <?php else: ?>
                    <a href="login.php" class="ml-3 btn btn-primary">Login</a>
                    <a href="register.php" class="ml-3 btn btn-primary">Register</a>
                <?php endif; ?>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="welcome-container">
                <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
            </div>
            <div class="guest-container">
                <h1>Welcome, Guest!</h1>
                <p>Please <a href="login.php">login</a> or <a href="register.php">register</a> to access more features.</p>
            </div>
        </div>
        <section class="mode-selection">
            <h2>Select Test Mode</h2>
            <div class="mode">
                <h3><i class="fas fa-vial"></i> Classic Test</h3>
                <p>A longer test with more detailed results.</p>
                <button class="btn btn-primary" onclick="startTest('classic')">Start Classic Test</button>
            </div>
            <div class="mode">
                <h3><i class="fas fa-stopwatch"></i> Short Test</h3>
                <p>A shorter test for quick results.</p>
                <button class="btn btn-primary" onclick="startTest('short')">Start Short Test</button>
            </div>
            <h2>See Memories</h2>
            <div class="mode">
                <h3><i class="fas fa-book"></i> Other Project</h3>
                <p>Open the Group Album page.</p>
                <button class="btn btn-primary" onclick="openMemeDiana()">Open Book of Memories</button>
            </div>
            <div class="mode">
                <h2>Play our Games</h2>
                <h3><i class="fas fa-gamepad"></i> Games</h3>
                <p>Explore our collection of games.</p>
                <button class="btn btn-primary" onclick="window.location.href='games.html'">Go to Games</button>
            </div>
            <div class="mode">
                <h2>Group Memes with AI</h2>
                <h3><i class="fas fa-video"></i> AI Videos</h3>
                <p>Explore our collection of AI videos.</p>
                <button class="btn btn-primary" onclick="window.location.href='videos.html'">Go to Videos</button>
            </div>
            <h2>Mini Games</h2>
            <div class="mode">
                <h3><i class="fas fa-chess"></i> Chess Game</h3>
                <p>Play the chess game.</p>
                <button class="btn btn-primary" onclick="window.location.href='Chess-master/indexx.html'">Play Chess-Master</button>
            </div>
            <div class="mode">
                <h3><i class="fas fa-heart"></i> Lover's Roulette</h3>
                <p>Play Lover's Roulette game.</p>
                <button class="btn btn-primary" onclick="window.location.href='LOVERS ROULLETE/indexxx.html'">Play Lover's Roulette</button>
            </div>
            <div class="mode">
                <h3><i class="fas fa-skull"></i> Sans game</h3>
                <p>Play the Miguel Fight.</p>
                <button class="btn btn-primary" onclick="window.location.href='sans-fight/Build/index.html'">Play Miguel sans-fight</button>
            </div>
        </section>
        <div id="test-section" class="hidden">
            <div id="question-container">
                <h2 id="question"></h2>
                <div class="answer-options">
                    <button class="btn btn-success strongly-agree" onclick="recordAnswer('Strongly Agree')">Strongly Agree</button>
                    <button class="btn btn-success agree" onclick="recordAnswer('Agree')">Agree</button>
                    <button class="btn btn-warning neutral" onclick="recordAnswer('Neutral')">Neutral</button>
                    <button class="btn btn-danger disagree" onclick="recordAnswer('Disagree')">Disagree</button>
                    <button class="btn btn-danger strongly-disagree" onclick="recordAnswer('Strongly Disagree')">Strongly Disagree</button>
                </div>
            </div>
        </div>
        <div id="results-section" class="hidden">
            <h2>Your Results</h2>
            <div id="results-container"></div>
            <div id="video-container" class="hidden">
                <video width="320" height="240" controls>
                    <source src="BIG BANG ATTACK.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <button class="btn btn-secondary" onclick="restartTest()">Restart</button>
            <button class="btn btn-secondary" id="download-results" onclick="downloadResultsAsPDF()">Download Results as PDF</button>
        </div>
        <section class="download-section">
            <h2>Download Game</h2>
            <a class="btn btn-info" href="NineEleven.exe" download>Download Nine Eleven Game</a>
        </section>
        <hr>
        <section class="playlist-section">
            <h2>Playlist</h2>
            <input type="file" id="song-input" multiple>
            <button class="btn btn-primary" onclick="uploadSongs()">Upload Songs</button>
            <div class="playlist-container">
                <ul id="playlist"></ul>
            </div>
        </section>
    </main>
    <footer>
        <p>Follow us on social media: <a href="https://www.youtube.com/watch?v=87SIhiQPjtk" target="_blank">YouTube</a></p>
        <p>&copy; 2024 BDSM Test. All rights reserved.</p>
    </footer>

    <div class="video-container video-left">
        <video id="video-left" autoplay loop muted>
            <source src="DBZ memes.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button class="btn btn-warning mute-button" onclick="toggleSound('video-left')">🔇</button>
        <button class="btn btn-warning toggle-video" onclick="toggleVideo('video-left')">Hide Video</button>
    </div>

    <div class="video-container video-right">
        <video id="video-right" autoplay loop muted>
            <source src="Japanese songs that sing about depression.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button class="btn btn-warning mute-button" onclick="toggleSound('video-right')">🔇</button>
        <button class="btn btn-warning toggle-video" onclick="toggleVideo('video-right')">Hide Video</button>
    </div>

    <script src="script.js"></script>
</body>
</html>

