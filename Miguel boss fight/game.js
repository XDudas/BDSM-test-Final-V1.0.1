// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Load images
const playerImg = new Image();
playerImg.src = 'Player.png';

const bossImg = new Image();
bossImg.src = 'miguel-sans_boss.webp';

const boneHImg = new Image();
boneHImg.src = 'multiple bones horizontal.png';

const boneVImg = new Image();
boneVImg.src = 'multiple bones vertical.png';

const longBoneHImg = new Image();
longBoneHImg.src = 'long bone horizontal.png';

const longBoneVImg = new Image();
longBoneVImg.src = 'long bone vertical.png';

const smallBoneHImg = new Image();
smallBoneHImg.src = 'small horizontal bone.png';

const smallBoneVImg = new Image();
smallBoneVImg.src = 'small vertical bone.png';

const gasterBlasterImg = new Image();
gasterBlasterImg.src = 'Gaster Blaster.png';

const gasterBlasterFireImg = new Image();
gasterBlasterFireImg.src = 'Gaster Blaster fire.png';

const backgroundImg = new Image();
backgroundImg.src = 'background.png'; // Add a background image

// Player object
const player = {
    x: 50,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    speed: 5,
    health: 100
};

// Boss object
const boss = {
    x: canvas.width - 150,
    y: canvas.height / 2 - 50,
    width: 100,
    height: 100,
    attackPattern: 0,
    attackCooldown: 0
};

// Bones array
const bones = [];

// Gaster Blasters array
const gasterBlasters = [];

// Key handling
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Main game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game objects
function update() {
    // Move player
    if (keys['ArrowUp'] && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys['ArrowDown'] && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
    if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }

    // Handle boss attacks
    if (boss.attackCooldown <= 0) {
        boss.attackPattern = Math.floor(Math.random() * 3);
        boss.attackCooldown = 100;
    } else {
        boss.attackCooldown--;
    }

    // Generate attacks based on pattern
    if (boss.attackCooldown % 20 === 0) {
        switch (boss.attackPattern) {
            case 0:
                // Horizontal bones
                bones.push({ x: boss.x - 20, y: Math.random() * canvas.height, width: 100, height: 20, img: boneHImg });
                break;
            case 1:
                // Vertical bones
                bones.push({ x: Math.random() * canvas.width, y: boss.y - 20, width: 20, height: 100, img: boneVImg });
                break;
            case 2:
                // Gaster Blasters
                gasterBlasters.push({ x: boss.x - 50, y: Math.random() * canvas.height, width: 100, height: 100, img: gasterBlasterImg, firing: false });
                break;
        }
    }

    // Move bones
    for (let i = 0; i < bones.length; i++) {
        if (bones[i].width > bones[i].height) {
            bones[i].x -= 5;
        } else {
            bones[i].y -= 5;
        }

        // Check collision with player
        if (
            player.x < bones[i].x + bones[i].width &&
            player.x + player.width > bones[i].x &&
            player.y < bones[i].y + bones[i].height &&
            player.y + player.height > bones[i].y
        ) {
            player.health -= 10;
            bones.splice(i, 1);
            i--;
        } else if (bones[i].x + bones[i].width < 0 || bones[i].y + bones[i].height < 0) {
            bones.splice(i, 1);
            i--;
        }
    }

    // Move and fire Gaster Blasters
    for (let i = 0; i < gasterBlasters.length; i++) {
        if (!gasterBlasters[i].firing) {
            gasterBlasters[i].firing = true;
            setTimeout(() => {
                gasterBlasters[i].firing = false;
                gasterBlasters.splice(i, 1);
            }, 1000);
        }

        // Check collision with player
        if (
            player.x < gasterBlasters[i].x + gasterBlasters[i].width &&
            player.x + player.width > gasterBlasters[i].x &&
            player.y < gasterBlasters[i].y + gasterBlasters[i].height &&
            player.y + player.height > gasterBlasters[i].y
        ) {
            player.health -= 20;
            gasterBlasters.splice(i, 1);
            i--;
        }
    }

    // Check for game over
    if (player.health <= 0) {
        alert('Game Over! You lost.');
        document.location.reload();
    }
}

// Draw game objects
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    // Draw boss
    ctx.drawImage(bossImg, boss.x, boss.y, boss.width, boss.height);

    // Draw bones
    for (let bone of bones) {
        ctx.drawImage(bone.img, bone.x, bone.y, bone.width, bone.height);
    }

    // Draw Gaster Blasters
    for (let gasterBlaster of gasterBlasters) {
        if (gasterBlaster.firing) {
            ctx.drawImage(gasterBlasterFireImg, gasterBlaster.x, gasterBlaster.y, gasterBlaster.width, gasterBlaster.height);
        } else {
            ctx.drawImage(gasterBlasterImg, gasterBlaster.x, gasterBlaster.y, gasterBlaster.width, gasterBlaster.height);
        }
    }

    // Draw player health
    drawHealthBar(player.health);
}

// Draw health bar
function drawHealthBar(health) {
    ctx.fillStyle = 'red';
    ctx.fillRect(20, 20, health * 2, 20);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(20, 20, 200, 20);

    // Add health text
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.fillText(`Health: ${health}`, 20, 15);
}

// Start the game loop
gameLoop();
